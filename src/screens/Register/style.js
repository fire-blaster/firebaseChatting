import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "black"
    },
    container: {
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    welcomeText: {
        color: 'white',
        fontSize: 24
    },
    profileTouch: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        resizeMode: "contain"
    },
    userInput: {
        marginTop: 20
    },
    emailInput: {
        marginTop: 20
    },
    passwordInput: {
        marginTop: 20
    },
    registerButton: {
        backgroundColor: "#0C6991",
        height: 30,
        justifyContent: "center",
        width: 80,
        alignItems: "center",
        borderRadius: 8,
        marginTop: 20
    },
    bottomView: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0
    }
})