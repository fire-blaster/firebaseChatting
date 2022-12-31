import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'

const Register = () => {

    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TextInput
                    style={styles.userInput}
                    placeholder="Username"
                    // value={password}
                    onChangeText={setUserName}

                />
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    // value={password}
                    onChangeText={setEmail}

                />
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    // value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={{backgroundColor:"skyblue"}}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Register