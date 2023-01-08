import { Dimensions } from 'react-native';

//COLOURS

const colors = {
    lightGrey: '#EBEBEB',
    underlayGrey: '#ADADAD',
    spaceGrey: '#858585',
    lightBlue: '#0099FF'
};



//SIZES & RATIOS - Relative to Device Dimensions

const {height, width} = Dimensions.get('window');

const sizes = {
    h: height,
    h2: height/2,
    h3: height/3,
    h4: height/4,
    h5: height/5,
    h10: height/10,
    h11: height/11,
    h12: height/12,
    h15: height/15,
    h20: height/20,
    h30: height/30,
    h40: height/40,
    h50: height/50,
    h60: height/60,
    h70: height/70,
    h80: height/80,
    w: width,
    w2: width/2,
    w3: width/3,
    w4: width/4,
    w5: width/5,
    w6: width/6,
    w7: width/7,
    w10: width/10,
    w20: width/20,
    w30: width/30,
    w40: width/40,
    w50: width/50,
    w60: width/60,
    w70: width/70,
    w80: width/80,
}


export { colors, sizes };