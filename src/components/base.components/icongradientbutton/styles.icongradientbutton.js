import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
    maskedView: { 
      flex: 1, 
    },
    maskElement: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    maskViewGradient: { 
      height: '100%',
    }
});

export { styles };