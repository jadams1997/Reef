import { StyleSheet } from "react-native";

const styles  = (style) => StyleSheet.create({
    linearGradient: {
        height: 40,
        width: 40,
        borderRadius: 0,
        position: 'relative',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    view: {
        height: style.height ? style.height-4 : 36,
        width: style.width ? style.width-4 : 36,
        borderRadius: style.borderRadius ? style.borderRadius-2 : 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    image: {
        height: style.height ? style.height-8 : 32,
        width: style.width ? style.width-8 : 32,
        borderRadius: style.borderRadius ? style.borderRadius-4 : 0
    }
});

export { styles };