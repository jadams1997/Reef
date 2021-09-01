import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

import { toInteger } from "lodash";

import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import { DATA } from "../../utils/Data.js";






const {height, width} = Dimensions.get('window');
const controlHeight = height/10;
const smallBox = width/3;

//PictureFeed

class Square extends React.PureComponent {
  render() {
    return (
      <LinearGradient 
        colors={['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff']} 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 1}} 
        style={styles.squareBorderGradient}
      > 
        <View style={styles.whiteBoxBackground}>
          <TouchableOpacity style={styles.square} onPress={() => this.props.setPhotoId(this.props.id)}>
            <Image style={styles.listImage} source={this.props.src}/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
};

const VerticalPhotoList = (props) => {
    const renderItem = ({ item }) => (
        <Square src={item.src} id={item.id} setPhotoId={props.setPhotoId} />
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
    props.setPhotoId(0)
  );
  
  return (
    <TouchableOpacity onPress={exit} style={styles.exit}>
      <Entypo name="cross" size={40} color="black" />
    </TouchableOpacity>
  );
};


const SelectedPhoto = (props) => {

  const [text, onChangeText] = React.useState(null);

  if (props.photoId == 0) {
      return null;
  };
  return (
    <View style={{            
      position: 'absolute',
      width: width,
      height: height-controlHeight
    }}>  
      <View style={styles.photo}>
          <ExitButton setPhotoId={props.setPhotoId} />
          <View style={styles.image}>
              <Text style={styles.title}>{props.photoId}</Text>
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
  const [photoId, setPhotoId] = React.useState(null);

  return (
    <View>
      <VerticalPhotoList setPhotoId={setPhotoId} />
      <SelectedPhoto photoId={photoId} setPhotoId={setPhotoId} />
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
    listImage: {
      width: smallBox-1,
      height: smallBox-1,
    },
    title: {
      fontSize: 32,
      textAlign: "center",
      color: '#373737'
    },
    photo: {
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

