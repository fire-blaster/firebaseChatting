import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyTextInput from '../../componenets/TextInput'
import { styles } from './style'
// import { auth } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';

const Forgot = ({ navigation }) => {

    const [email, setEmail] = useState(null)
    const handleForgot = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert("Check your email")
                navigation.navigate("Login")
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (

        <SafeAreaView style={styles.safeContainer}>

            <View style={styles.container}>
                <MyTextInput
                    iconName="email"
                    iconType="material"
                    placeholder="Email"
                    onChangeText={setEmail}
                />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {
                        handleForgot()
                    }}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Forgot

