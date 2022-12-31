import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { styles } from './style';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async (email, password) => {
        console.log("E and P:", email, password);
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password)
            console.log('User signed in successfully: ', userCredential.user.email);
            alert("Success")
        } catch (error) {
            console.log('Error signing in: ', error);
            alert("No user found")
        }

    };

    return (
        <SafeAreaView style={styles.safeContainer}>

            <View style={styles.topContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    // value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    // value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Log in" onPress={() =>
                    handleLogin(email, password)
                } />
                <View style={styles.createView}>

                    <Text>Don't have account? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Register")
                        }}
                    >
                        <Text style={styles.createText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
