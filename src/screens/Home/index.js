import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import NetInfo from "@react-native-community/netinfo";
import { styles } from './style'


const Home = () => {

    useEffect(() => {
        unsubscribe()
    }, [])


    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });

    const [userName, setUserName] = useState(null)


 

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

