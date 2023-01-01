import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { styles } from './style';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import MyTextInput from '../../componenets/TextInput';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email, password) => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password)
            console.log('User signed in successfully: ', userCredential.user.email);
            alert("Success")
            navigation.navigate("Home")
        } catch (error) {
            console.log('Error signing in: ', error);
            alert("No user found")
        }
    };

    const handleForgot=()=>{
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
                    iconType="material"
                    onChangeText={setEmail}
                />

                <MyTextInput
                    viewStyle={styles.passwordInput}
                    placeholder="Password"
                    iconName="lock"
                    iconType="material"
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity 
                style={styles.forgotPass}
                onPress={()=>{
                    handleForgot()
                }}
                >
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() =>
                        handleLogin(email, password)}>
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