import { colors as c, sizes as s, linGradCoords as lgc } from './app.styles.js';

class TabButtonStyle {
    constructor(coords) {
      this.color = c.primaryGradientScheme;
      this.coords = coords;
    }
  }

const tabBarButtonStyles = {
    
    buttonStyle: {
        width: s.w5,
        backgroundColor: 'white'
    },
    buttonGradientVariations: {
        var1: new TabButtonStyle(lgc.var2),
        var2: new TabButtonStyle(lgc.var3),
        var3: new TabButtonStyle(lgc.var6),
        var4: new TabButtonStyle(lgc.var7),
        var5: new TabButtonStyle(lgc.var8)
    }

};

export { tabBarButtonStyles };