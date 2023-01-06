import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styles } from './style'
import MyTextInput from './../../componenets/TextInput/index';
import { registerUser } from './../../api/user';

const Register = ({ navigation }) => {

    const [picture, setPicture] = useState(null)
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleRegister = async (picture, userName, email, password) => {
        console.log("picture---:", picture);
        registerUser(picture, userName, email, password)

    }

    const uploadImage = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker")
            } else if (response.errorCode) {
                alert(response.errorCode)
            } else {
                const source = response?.assets[0]?.uri
                console.log("source:", source);
                setPicture(source)
            }
        })
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

                <TouchableOpacity
                    style={styles.registerButton}
                    // onPress={() =>
                    //     handleRegister()}
                    onPress={() => { handleRegister(picture, userName, email, password) }}
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