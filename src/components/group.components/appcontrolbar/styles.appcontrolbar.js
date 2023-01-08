import { sizes as s } from '../../../globals';

const styles =  {
    controlBar: {
        width: s.w,
        height: s.h12,
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        opacity: .98,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    iconGradientButton: {
        width: s.w5,
        backgroundColor: 'white'
    },
};

export { styles }; 