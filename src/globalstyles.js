import { Dimensions } from 'react-native';

//COLOURS

const colors = {
    primaryGradientScheme: ['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff'] 
};

const linGradCoords = {
    var1: {
        start: {x: 1, y: 1},
        end: {x: 0, y: 0}
    },
    var2: {
        start: {x: 0, y: 0},
        end: {x: 1, y: 1}
    },
    var3: {
        start: {x: 0, y: 1},
        end: {x: 1, y: 0}
    },
    var4: {
        start: {x: 1, y: 0},
        end: {x: 0, y: 1}
    },
    var5: {
        start: {x: 0.8, y: 0.2},
        end: {x: 0.2, y: 0.8}
    },
    var6: {
        start: {x: 0.2, y: 0.8},
        end: {x: 0.8, y: 0.2}
    },
    var7: {
        start: {x: 0, y: 0.4},
        end: {x: 1, y: 0.6}
    },
    var8: {
        start: {x: 0, y: 0.2},
        end: {x: 1, y: 0.8}
    },   
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
    w10: width/10,
    w20: width/20,
    w30: width/30,
    w40: width/40,
    w50: width/50
}


export { colors, sizes, linGradCoords };