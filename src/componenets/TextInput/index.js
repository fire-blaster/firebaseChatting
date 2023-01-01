import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const MyTextInput = ({ viewStyle, iconName, iconType, ...props }) => {
    return (
        <View style={[styles.container, viewStyle]}>
            {iconName && (
                <Icon
                    style={styles.icon}
                    name={iconName}
                    type={iconType}
                    size={20}
                    color="#ccc"
                />
            )}
            <TextInput
                style={styles.input}
                placeholderTextColor="#ccc"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "gray",
        padding: 5,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        // borderColor: "gray",
        // borderWidth: 0.5,
        // borderRadius: 10,
        // marginVertical: 10,
        height: 40,
        width: 200,
    },
});

export default MyTextInput;
