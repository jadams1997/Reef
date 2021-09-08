import { StyleSheet } from "react-native";
import { sizes as s } from "../../globals";

const styles =  StyleSheet.create({
    
    scrollView: {
        flex: 1
    },


    headerWrapper: {
        position: 'relative',
        width: s.w-s.w20,
        paddingLeft: s.w40,
        paddingBottom: s.w30,
        marginLeft: s.w40,
        marginTop: s.w10,
        marginBottom: s.w20,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: '#D3D3D3'
    },
    pageHeader: {
        flex: 1,
        fontSize: 30,
        color: '#373737'
    },
    

    gradientWrappedImage: {
        height: s.w2,
        width: s.w2,
        borderRadius: s.w4,
        marginTop: s.w30,
    },

    name: {
        fontSize: 30,
        alignSelf: "center",
        marginTop: s.w20,
        color: '#373737',
        backgroundColor: 'white'
    },


    profileTabBar: {
        height: s.w7,
        marginTop: s.w20,
        marginHorizontal: s.w40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileTabButton: {
        height: s.w7,
        width: s.w4-s.w80,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#D3D3D3'
    },
    profileButtonNames: {
        fontSize: 18,
        color: '#373737',
        textAlign: "center",
    },
    maskedView: { 
        flexDirection: 'row', 
        height: s.w7,
        overflow: 'visible' //required to get borders to overlap
      },
    maskElement: {
        backgroundColor: 'transparent',
        height: '100%',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1   
    },
    maskViewGradient: {
        flex: 1, 
    }
});

export { styles };