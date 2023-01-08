import { firebase } from '../config/firebaseConfig';
import '@react-native-firebase/database';

export const registerUser = async (picture, userName, email, password) => {
    try {
        return await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        return error
    }
}

export const loginUser = async (email, password) => {
    try {
        return await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        return error
    }
}

export const addUser = async (picture, userName, email, userID) => {
    console.log("picture:", picture);
    console.log("name:", userName);
    console.log("email:", email);
    console.log("userID:", userID);

    try {
        return firebase.database().ref("/users/" + firebase.auth().currentUser.uid).
            set({
                userID: userID,
                userName: userName,
                email: email,
                picture: picture
            })
    } catch (e) {
        return e
    }
}



