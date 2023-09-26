import { StyleSheet } from 'react-native';
import {Calculator} from '@/utils/calculator';
import { useTheme } from '@react-navigation/native';


// const {colors} = useTheme();

export default StyleSheet.create({
    conButton: {
        width: '85%',
        height: '30%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'roboto',
        color: 'white'
    }
    
});
