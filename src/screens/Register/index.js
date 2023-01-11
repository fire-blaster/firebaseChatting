import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import MyTextInput from './../../componenets/TextInput/index';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from "react-native-uuid"
import SimpleToast from 'react-native-simple-toast';
import database from '@react-native-firebase/database';



const { width, height } = Dimensions.get("window")

const Register = ({ navigation }) => {

    const [picture, setPicture] = useState(null)
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [gender, setGender] = useState(null)

    const handleRegister = async () => {
        console.log("Prajati,", picture, userName, email, password, gender);
        if (userName === "" || email === "" || password === "" || gender === "") {
            SimpleToast.show("Fill all the fields")
            return false;
        }
        let userData = {
            id: uuid.v4(),
            profilePic: picture,
            userName: userName,
            email: email,
            password: password,
            gender: gender
        }

        database().ref("/users/" + userData?.id)
            .set(userData)
            .then(() => SimpleToast.show("Register Success!"))
        setUserName("")
        setEmail("")
        setPassword("")
        setGender("")
        setPicture("")
        navigation.navigate("Login")

        // firebase.database().ref("/users/" + userData?.id)
        //     .set(userData)
        //     .then(() => SimpleToast.show("Rugister Success!"))
        // const res = await registerUser(picture, userName, email, password)
        // console.log("res:", res);
        // let userID = firebase.auth().currentUser.uid
        // if (userID !== null) {
        //     try {
        //         await AsyncStorage.setItem('userID', userID)
        //     } catch (e) {
        //         console.log("Async error:", e);
        //     }
        //     await addUser(picture, userName, email, userID)
        //     navigation.navigate("Home")
        // }
    }

    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image?.path);
            setPicture(image?.path)
        });
    }


    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text
                    style={styles.welcomeText}>
                    Register
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        uploadImage()
                    }}
                    style={styles.profileTouch}>
                    <Image
                        style={styles.profilePic}
                        source={{
                            uri: picture === null ? 'https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png' : picture,
                        }}
                    />
                </TouchableOpacity>
                <MyTextInput
                    viewStyle={styles.userInput}
                    placeholder="Username"
                    iconName="person"
                    iconType="material"
                    value={userName}
                    onChangeText={setUserName}
                />

                <MyTextInput
                    viewStyle={styles.emailInput}
                    placeholder="Email"
                    iconName="email"
                    iconType="material"
                    value={email}
                    onChangeText={setEmail}
                />

                <MyTextInput
                    viewStyle={styles.passwordInput}
                    placeholder="Password"
                    iconName="lock"
                    iconType="material"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <MyTextInput
                    viewStyle={styles.emailInput}
                    placeholder="Gender"
                    iconName="user"
                    iconType="feather"
                    value={gender}
                    onChangeText={setGender}
                />

                <TouchableOpacity
                    style={styles.registerButton}

                    onPress={handleRegister}
                >
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