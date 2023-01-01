import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import MyTextInput from './../../componenets/TextInput/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';

const Register = ({ navigation }) => {

    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    const handleRegister = async (userName, email, password) => {
        AsyncStorage.setItem('username', userName).then(() => {
            console.log("Username saved", userName)
        }).catch((error) => {
            alert(error)
        });
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            navigation.navigate("Home")
        }).catch((error) => {
            alert(error)
        });



    }
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text
                    style={styles.welcomeText}>
                    Register
                </Text>


                <MyTextInput
                    viewStyle={styles.userInput}
                    placeholder="Username"
                    iconName="person"
                    iconType="material"
                    onChangeText={setUserName}

                />


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
                     
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() =>
                        handleRegister(userName, email, password)}>
                    <Text>Register</Text>
                </TouchableOpacity>

                <View style={styles.bottomView}>

                    <Text>Already have account? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Login")
                        }}>

                        <Text style={{ color: "lime", textDecorationLine: "underline", fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Register