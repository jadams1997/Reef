import { StyleSheet} from "react-native";
import { colors, sizes as s, sizes} from '../../../globals'

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    width: '100%', 
    height: '90%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  photoViewer: {
    position: 'relative',
    width: '92%',
    height: '78%',
    borderRadius: 4,
    backgroundColor: "white",
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  image: {
    position: 'relative',
    top: 0,
    marginTop: -30,
    width: '100%',
    height: .92*sizes.w,
    justifyContent: "center",
    color: "black",
    textAlign: "center",
    borderBottomWidth: .5,
    borderColor: "grey",
    backgroundColor: "white"
  },
  exit: {
    position: 'relative',
    top: 10,
    left: 10,
    height: 30,
    width: 30,
    zIndex: 1,
    opacity: .3
  },
  buttonContainer: {
    flexDirection:'row', 
    margin: 5, 
    width: '95%', 
    backgroundColor:'white', 
    alignSelf:'center', 
    justifyContent: 'space-around'
  },
  buttonText: {
    color: colors.spaceGrey,
    fontSize: 16, 
    fontWeight: '500',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '100%',
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingTop: 12,
  },
  input: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    borderRadius: sizes.h30,
    height: sizes.h15,
    width: '80%',
    backgroundColor: colors.lightGrey
  }
});

export { styles };