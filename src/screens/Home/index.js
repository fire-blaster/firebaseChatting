import { SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './style'


const Home = () => {
    const [userName, setUserName] = useState(null)


    AsyncStorage.getItem('username').then((value) => {
        console.log('The value of key is:', value);
        setUserName(value)
    });

    return (

        <SafeAreaView style={styles.safeContainer}>
            <Text>Hello {userName}</Text>
            <View>
                <Text>Home</Text>
            </View>

        </SafeAreaView>
    )
}

export default Home

