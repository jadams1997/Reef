import { Dimensions } from 'react-native';

//COLOURS

const colors = {
    primaryGradientScheme: ['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff'] 
};

//SIZES & RATIOS - Relative to Device Dimensions

const {height, width} = Dimensions.get('window');

const sizes = {
    h: height,
    h5: height/5,
    h10: height/10,
    h20: height/20,
    h30: height/30,
    h40: height/40,
    w: width,
    w5: width/5,
    w10: width/10,
    w20: width/20,
    w30: width/30,
    w40: width/40
}


export { colors, sizes };