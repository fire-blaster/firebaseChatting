import { SafeAreaView, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { styles } from './style'
import { firebase } from '../../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { ONLINE } from './../../redux/action';


const Home = () => {
    const [userData, setUserData] = useState(null)

    const dispatch = useDispatch()
    const test = useSelector(state => state)
    console.log("test redux:", test);


    useEffect(() => {
        unsubscribe()
    }, [])

    useEffect(() => {
        getUsers();
    }, [])

    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        dispatch({ type: ONLINE, payload: state.isConnected })
    });
    console.log("usnsub:", unsubscribe);


    const getUsers = async () => {
        firebase.app().database().ref("/users/").once("value").then(snapshot => {
            setUserData(snapshot.val())
        })

    }




    return (
        <SafeAreaView style={styles.safeContainer}>
            <Image
                style={{ width: 120, height: 120 }}
                source={{ uri: userData?.picture }}
            />

            <Text>Hello {userData?.userName}</Text>
            <View>
                <Text>Home</Text>
            </View>

        </SafeAreaView>
    )
}

export default Home

