import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';
import { useTheme } from '@react-navigation/native';
import fontCalculator from 'src/utils/fontCalculator';

// const {colors} = useTheme();

export default StyleSheet.create({
  box: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(247, 247, 247, 0.70)',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 1,
    shadowRadius: 5,
    elevation: 2,
    width: '95%',
    marginLeft: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    boxshadow: '4px 4px 10px 0px',
    textShadowRadius: 10,
    borderColor: 'rgba(208, 208, 208, 0.30)',
    backgroundColor: 'rgba(247, 247, 247, 0.70)',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
  },
  minibox: {
    alignItems: 'center',
    marginTop: 15,
    flex: 1
  },
  img: {
    width: 80,
    height: 70,
  },
  itext: {
    fontSize: fontCalculator(14),
    fontWeight: 'bold',
    color: '#2B2B2BE5',
    fontFamily: 'Roboto',
  

    // width: 200,
  },
  drsaid: {
    paddingLeft: 15,
    color: '#2B2B2B66',
    marginTop: 10,
    fontSize: 13,
  },
  continue: {
    fontSize: fontCalculator(18),
    fontWeight: 'bold',
    color: '#E58A8A',
    paddingLeft: 15,
    marginTop: 10,
    fontFamily: 'Roboto',
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 13.5,
    width: Calculator(25),
    height: Calculator(10),
    marginLeft: Calculator(10),
  },
});
