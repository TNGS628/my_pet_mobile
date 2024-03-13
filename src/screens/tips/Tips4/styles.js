import { StyleSheet } from 'react-native';
import {Calculator} from '@/utils/calculator';

export default StyleSheet.create({
    welcome: {
        fontSize: 24,
        color: '#FB8B02',
        fontWeight: 'bold',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 94
    },
    secondText: {
        fontSize: 16,
        fontWeight: '300',
        fontStyle: 'bold',
        color: '#808080',
        textAlign: "center"

    },
    secondTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 30
    },
    picContainer: {
        alignItems: 'center',
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
        right: 23,
        top: 30,
      },
    backButton: {
        position: 'absolute',
        left: 23,
        top: 30,
    }
});
