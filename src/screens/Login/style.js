import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: "black",
        flex: 1
    },
    topContainer: {
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    welcomeText: {
        color: 'white',
        fontSize: 24
    },
    emailInput: {
        marginTop: 20
    },
    passwordInput: {
        marginTop: 20
    },
    forgotPass: {
        alignSelf: "flex-end",
        marginTop: 10,
        marginRight: 20
    },
    loginButton: {
        backgroundColor: "#0C6991",
        height: 30,
        justifyContent: "center",
        width: 60,
        alignItems: "center",
        borderRadius: 8,
        marginTop: 20
    },
    createView: {
        flexDirection: "row",
        // marginTop: 10
        position: "absolute",
        bottom: 0
    },
    createText: {
        color: "red",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
})