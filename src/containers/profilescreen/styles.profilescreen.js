import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    
    scrollView: {
        flex: 1
    },


    headerWrapper: {
        position: 'relative',
        width: width-width/20,
        paddingLeft: width/40,
        paddingBottom: width/30,
        marginLeft: width/40,
        marginTop: width/10,
        marginBottom: width/20,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: '#D3D3D3'
    },
    pageHeader: {
        flex: 1,
        fontSize: 30,
        color: '#373737'
    },
    

    

    name: {
        fontSize: 30,
        alignSelf: "center",
        marginTop: width/20,
        color: '#373737',
        backgroundColor: 'white'
    },


    profileTabBar: {
        height: width/7,
        marginTop: width/20,
        marginHorizontal: width/40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileTabButton: {
        height: width/7,
        width: (width-width/20)/4,
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
        height: width/7,
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