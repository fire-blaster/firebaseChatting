import { firebase } from '@react-native-firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBLfKK61Vg4oB7mpomzQ_md7n7hXsZwjPw",
    authDomain: "chatapp-6bc7a.firebaseapp.com",
    databaseURL: "https://chatapp-6bc7a-default-rtdb.firebaseio.com",
    projectId: "chatapp-6bc7a",
    storageBucket: "chatapp-6bc7a.appspot.com",
    messagingSenderId: "820049042862",
    appId: "1:820049042862:web:839eb0af0fefbbf08abc3f",
    measurementId: "G-N1R4PJ4ZJD"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export { firebase }
