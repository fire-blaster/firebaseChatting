import { SafeAreaView, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { styles } from './style'
import { firebase } from '../../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { ONLINE } from './../../redux/action';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
    const [userData, setUserData] = useState(null)

    const [allUsers, setAllsuers] = useState([])
    console.log("allUsers:", allUsers);

    const dispatch = useDispatch()
    const online = useSelector(state => state?.online)



    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch({ type: ONLINE, payload: state.isConnected })
        });
        unsubscribe()
    }, [])

    useEffect(() => {
        getUsers();
    }, [])



    const getUsers = async () => {
        firebase.app().database().ref("/users/" + firebase.auth().currentUser.uid).once("value").then(snapshot => {
            setUserData(snapshot.val())
        })


    }

    useEffect(() => {


        const getListOfUsers = async () => {
            await firebase.database().ref("/users/")
                .on("value", (datasnapshot) => {
                    let users = []
                    datasnapshot.forEach((child => {

                        users.push(child)
                        setAllsuers(users)
                    }))
                })

        }
        getListOfUsers()
    }, [])



    return (
        <SafeAreaView style={styles.safeContainer}>
            <Image
                style={{ width: 100, height: 100, backgroundColor: "red", borderRadius: 100 / 2 }}
                source={{ uri: userData?.picture }}
            />
            <View style={{
                width: 10,
                height: 10,
                backgroundColor: online === false ? "red" : "lime",
                borderRadius: 10 / 2,
                position: "absolute",
                left: 70,
                borderColor: "white",
                borderWidth: 1
            }} />

            <Text style={{ color: "cyane" }}>{userData?.userName}</Text>
            <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                <Text style={{ color: "black", fontSize: 25, alignSelf: "center" }}>Chat List</Text>
                {allUsers.map((item,i)=>{

                    console.log("item:",length());
                })}

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home

