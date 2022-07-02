import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { BlurView } from 'expo-blur';

import { styles } from "./styles.photoviewer";
import { sizes, colors } from "../../../globals"

//Picture

const PhotoViewer = (props) => {

    const [text, onChangeText] = React.useState(null);
  
    const exit = () => (
        props.setPhoto(null)
      );
    

    if (props.photo == null) {
        return null;
    };
    return (
        <BlurView style={styles.blurView} intensity={100} tint='default'>  
            <View style={styles.photoViewer}>
                <TouchableOpacity onPress={exit} style={styles.exit}>
                    <Feather name="x" size={30} color={colors.spaceGrey} />
                </TouchableOpacity>
                <View style={styles.image}>
                    <Image 
                        style={{height: '100%', width: '100%'}}  
                        source={props.photo.src}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <AntDesign.Button 
                        name='like1' 
                        size={24} 
                        color={colors.lightBlue} 
                        backgroundColor='white'
                        underlayColor={colors.underlayGrey}
                        activeOpacity={.8}
                        onPress={() => console.log('ye')}
                        borderRadius='10'
                        height={sizes.h15}
                    >
                        <Text style={styles.buttonText}>
                            Like
                        </Text>
                    </AntDesign.Button>
                    <FontAwesome.Button 
                        name='share' 
                        size={24} 
                        color={colors.lightBlue} 
                        backgroundColor='white'
                        underlayColor={colors.underlayGrey}
                        activeOpacity={.8}
                        onPress={() => console.log('ye')}
                        borderRadius='10'
                        height={sizes.h15}
                    >
                        <Text style={styles.buttonText}>
                            Share
                        </Text>
                    </FontAwesome.Button>
                    <FontAwesome.Button 
                        name='user-circle-o' 
                        size={26} 
                        color={colors.lightBlue} 
                        backgroundColor='white'
                        underlayColor={colors.underlayGrey}
                        activeOpacity={.8}
                        onPress={() => console.log('ye')}
                        borderRadius={10}
                        height={sizes.h15}
                    >
                        <Text style={styles.buttonText}>
                            View Profile
                        </Text>
                    </FontAwesome.Button>
                </View>
                <View style={{position: 'relative', height: .5, backgroundColor: colors.underlayGrey, width: '98%', alignSelf: 'center'}} />
                <KeyboardAvoidingView 
                    behavior='position' 
                    keyboardVerticalOffset={44} 
                >
                    <View style={styles.inputContainer}>
                        <TextInput 
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder={"Send a message..."}
                        />
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            style={{height: sizes.h15, width: sizes.h15, alignItems: 'center', justifyContent: 'center', borderRadius: 25}}
                            onPress={() => alert('Pressed!')}
                        >
                            <View style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 25}}>
                                <FontAwesome 
                                    name='send-o' 
                                    size={26} 
                                    color={colors.lightBlue} 
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </BlurView>
    ); 
};


export {PhotoViewer};