import { StyleSheet } from 'react-native';

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
    appIntroSliderDotSelected: {
        backgroundColor: "black",
      },
      appIntroSliderDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "#DEDEDE",
        marginHorizontal: 4,
      },
      appIntroDotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
        paddingBottom: 20
      },
      appIntroSliderContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 25,
        paddingVertical: 35,
      },
      
});
