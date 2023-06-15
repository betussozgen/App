import React from "react";
import { TextInput, View } from "react-native";
import styles from "./Input.style";


const Input = ({ placeholder, value, onType, iconName, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
            />

        </View>
    )
}

export default Input;