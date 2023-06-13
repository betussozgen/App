import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#00897b',
        },
        title: {
            ...base_style.title,
            color: 'white',

        },

    }),
    secondry: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#00897b',
        },
        title: {
            ...base_style.title,
            color: '#00897b',
        },

    }),
};
