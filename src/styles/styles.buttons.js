import { colors as c, sizes as s } from './styles.appBasics.js';

const tabBarButtonStyles = {
    
    buttonStyle: {
        width: s.w5,
        backgroundColor: 'white'
    },
    buttonGradientVariations: {
        var1: {
            color: c.primaryGradientScheme,
            start: {x: 0.8, y: 0.2},
            end: {x: 0.2, y: 0.8}
        },
        var2: {
            color: c.primaryGradientScheme,
            start: {x: 0, y: 1},
            end: {x: 1, y: 0}
        },
        var3: {
            color: c.primaryGradientScheme,
            start: {x: 1, y: 1},
            end: {x: 0, y: 0}
        },
        var4: {
            color: c.primaryGradientScheme,
            start: {x: 0.5, y: 0},
            end: {x: 0, y: 0.5}
        },
        var5: {
            color: c.primaryGradientScheme,
            start: {x: 0, y: 0},
            end: {x: 1, y: 1}
        }
    }

};

export { tabBarButtonStyles };