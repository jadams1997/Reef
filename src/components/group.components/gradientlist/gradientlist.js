import React from "react";
import { View, FlatList, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import { DATA } from "../../../utils/Data.js";






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
          <TouchableOpacity style={styles.square} onPress={() => this.props.setPhoto(this.props.sourcePhoto)}> 
            <Image style={styles.listImage} source={this.props.sourcePhoto.src}/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
};

const VerticalPhotoList = (props) => {
    const renderItem = ({ item }) => (
        <Square sourcePhoto={item} setPhoto={props.setPhoto} /> //source photo is an object {id: num, src: require function}
    );
 
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns='3'
            initialNumToRender={18}
            style={styles.list}
        />
    );
};


//Picture

const ExitButton = (props) => {
  
  const exit = () => (
    props.setPhoto(null)
  );
  
  return (
    <TouchableOpacity onPress={exit} style={styles.exit}>
      <Entypo name="cross" size={40} color="black" />
    </TouchableOpacity>
  );
};


const SelectedPhoto = (props) => {

  const [text, onChangeText] = React.useState(null);

  if (props.photo == null) {
      return null;
  };
  return (
    <View style={{            
      position: 'absolute',
      width: width,
      height: height-controlHeight
    }}>  
      <View style={styles.photo}>
          <ExitButton setPhoto={props.setPhoto} />
          <View style={styles.image}>
              <Image style={{height: '100%', width: '100%', borderRadius: 10}} source={props.photo.src}/>
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
  const [photo, setPhoto] = React.useState(null);

  return (
    <View>
      <VerticalPhotoList setPhoto={setPhoto} />
      <SelectedPhoto photo={photo} setPhoto={setPhoto} />
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
    list: {
      height: '100%'
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

