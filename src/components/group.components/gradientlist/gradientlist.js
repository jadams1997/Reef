import React from "react";
import { View, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import { PhotoViewer } from "../../base.components";

import { DATA } from "../../../utils/data.js";






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








//Page Content

const Content = () => {
  const [photo, setPhoto] = React.useState(null);

  return (
    <View>
      <VerticalPhotoList setPhoto={setPhoto} />
      <PhotoViewer photo={photo} setPhoto={setPhoto} />
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
    
});

export { Content };

