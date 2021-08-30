import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { DATA } from "./Data.js";
import { toInteger } from "lodash";
import { Entypo } from '@expo/vector-icons';

const {height, width} = Dimensions.get('window');
const controlHeight = height/10;
const smallBox = width/3;

//PictureFeed

class Square extends React.PureComponent {
  
  handler = () => {
    const number = toInteger(this.props.title);
    return (
      this.props.handler(number)
    );
  };

  render() {
    return (
      <LinearGradient 
        colors={['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff']} 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 1}} 
        style={styles.squareBorderGradient}
      > 
        <View style={styles.whiteBoxBackground}>
          <TouchableOpacity style={styles.square} onPress={(this.handler)}>
            <Text style={styles.title}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
};

const VerticalPictureList = (props) => {
    const renderItem = ({ item }) => (
        <Square title={item.number} handler={props.handler} />
    );
 
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns='3'
            initialNumToRender={18}
        />
    );
};


//Picture

const ExitButton = (props) => {
  
  const exit = () => (
    props.handler(0)
  );
  
  return (
    <TouchableOpacity onPress={exit} style={styles.exit}>
      <Entypo name="cross" size={40} color="black" />
    </TouchableOpacity>
  );
};


const Picture = (props) => {
    
  const [text, onChangeText] = React.useState(null);

  useEffect(() => console.log(props.pictureSelected), [props.pictureSelected]); //checks correct state being passed down chain

  if (props.pictureSelected == 0) {
      return null;
  };
  return (
    <View style={{              //Added View to prevent scrolling whilst viewing image
      position: 'absolute',
      width: width,
      height: height-controlHeight
    }}>  
      <View style={styles.picture}>
          <ExitButton handler={props.handler} />
          <View style={styles.image}>
              <Text style={styles.title}>{props.pictureSelected}</Text>
          </View>
          <TextInput 
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder={"Send Something!"}
          />
      </View>
    </View>
  ); 
};


//Page Content

const Content = () => {
  const [pictureSelected, setpictureSelected] = React.useState(0);

  useEffect(() => console.log(pictureSelected), [pictureSelected]); //prints value of picture selected every time it updates

  return (
    <View>
      <VerticalPictureList handler={setpictureSelected} />
      <Picture pictureSelected={pictureSelected} handler={setpictureSelected} />
    </View>
  );
};



const styles =  StyleSheet.create({
    squareBorderGradient: {
      width: smallBox,
      height: smallBox,
      justifyContent: "center",
      alignItems: 'center'
    },
    whiteBoxBackground: {
      width: smallBox-1,
      height: smallBox-1,
      backgroundColor: 'white',
      justifyContent: "center",
      alignItems: 'center',  
    },
    square: {
      width: smallBox-1,
      height: smallBox-1,
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "white"
    },
    title: {
      fontSize: 32,
      textAlign: "center",
      color: '#373737'
    },
    picture: {
      top: controlHeight/3,
      left: controlHeight/8,
      width: width-controlHeight/4,
      height: height-1.5*controlHeight,
      borderRadius: 10,
      backgroundColor: "white",
      justifyContent: "space-around" ,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7
    },
    image: {
      width: 2*smallBox,
      height: 2*smallBox,
      justifyContent: "center",
      color: "black",
      textAlign: "center",
      borderWidth: .5,
      borderColor: "grey",
      borderRadius: 10,
      backgroundColor: "white"
    },
    input: {
      fontSize: 24,
      textAlign: "center",
      padding: 10,
      borderWidth: .5,
      borderColor: "grey",
      borderRadius: 5,
    },
    exit: {
      left: smallBox/4,
      backgroundColor: "white",
      alignSelf: "flex-start"
    }
});

export { Content };

