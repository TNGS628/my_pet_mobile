import { StyleSheet } from 'react-native';
import {Calculator} from '@/utils/calculator';

export default StyleSheet.create({
    headContainer: {
        top: 100
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 94
    },
    secondText: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'bold',
        fontFamily: 'Roboto',
        color: '#808080'
    },
    secondTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    picContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    buttonContainer: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    conButtonStyle: {
        top: '90%'
    },
    skipButton: {
        position: 'absolute',
        top: 35,
        flex: 1,
        right: 4,
      }
});
