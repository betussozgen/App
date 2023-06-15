import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 7,
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
            // backgroundColor: '#00897b',
            backgroundColor: colors.darkgreen,
        },
        title: {
            ...base_style.title,
            color: 'white',

        },

    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderWidth: 1,
            // borderColor: '#00897b',
            borderColor: colors.darkgreen,
        },
        title: {
            ...base_style.title,
            // color: '#00897b',
            color: colors.darkgreen,
        },

    }),
};
