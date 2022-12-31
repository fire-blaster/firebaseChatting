import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: "black",
        flex: 1
    },
    topContainer: {
        margin: 50
    },
    emailInput: {
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 10
    },
    passwordInput: {
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 10
    },
    createView: {
        flexDirection: "row",
        marginTop: 10
    },
    createText: {
        color: "red",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
})