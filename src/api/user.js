import { firebase } from '@react-native-firebase/auth';

export const registerUser = async (profilePic, userName, email, password) => {
    try {
        return await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        return error
    }
}

