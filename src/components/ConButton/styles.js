import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';
import { useTheme } from '@react-navigation/native';
import fontCalculator from 'src/utils/fontCalculator';

// const {colors} = useTheme();

export default StyleSheet.create({
  conButton: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Calculator(15)
  },
  textStyle: {
    fontSize: fontCalculator(18),
    fontWeight: '500',
    fontFamily: 'roboto',
    color: 'white',
  },
});
