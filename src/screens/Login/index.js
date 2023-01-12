import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import database from "@react-native-firebase/database"
import { styles } from './style';
import MyTextInput from '../../componenets/TextInput';
import SimpleToast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/reducer';
import auth from '../../services/auth';



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const dispatch = useDispatch()
        // const response = await loginUser(email, password)
        console.log("Email:::", email);
        // if (response !== null) {
        //     navigation.navigate("Home")
        // }
        database().ref("users/")
            .orderByChild("email")
            .equalTo(email)
            .once("value")
            .then(async snapshot => {
                if (snapshot.val() === null) {
                    SimpleToast.show("Invalid Email!")
                    return false;
                }
                let userData = Object.values(snapshot.val())[0]

                if (userData?.password !== password) {
                    SimpleToast.show("Invalid Password!")
                    return false;
                }
                dispatch(setUser(userData));
                await auth.setAccount(userData);
                SimpleToast.show("Login Success!");
            })

    };

    const handleForgot = () => {
        navigation.navigate("Forgot")
    }
    
    return (
        <SafeAreaView
            style={styles.safeContainer}>

            <View
                style={styles.topContainer}>
                <Text
                    style={styles.welcomeText}>
                    Login
                </Text>



                <MyTextInput
                    viewStyle={styles.emailInput}
                    placeholder="Email"
                    iconName="email"
                    value={email}
                    iconType="material"
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />

                <MyTextInput
                    viewStyle={styles.passwordInput}
                    placeholder="Password"
                    iconName="lock"
                    value={password}
                    iconType="material"
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.forgotPass}
                    onPress={() => {
                        handleForgot()
                    }}
                >
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <View
                    style={styles.createView}>
                    <Text>Don't have account? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Register")
                        }}
                    >
                        <Text
                            style={styles.createText}>
                            Create
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;