import { StyleSheet } from "react-native";
import { sizes as s } from "../../../globalstyles";

const styles  = (props) => StyleSheet.create({
    pictureBackgroundGradient: {
        width: props.size,
        height: props.size,
        borderRadius: props.radius,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        alignSelf: 'center',
        marginTop: s.w30 
    },
    pictureWhiteBackground: {
        height: props.size-4,
        width: props.size-4,
        borderRadius: props.radius-2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    profilePicture: {
        height: props.size-8, 
        width: props.size-8,
        borderRadius: props.radius-4,
    }
});

export { styles };