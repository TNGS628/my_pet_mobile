import { StyleSheet, Text, View } from 'react-native';
import Calculator from 'src/utils/calculator';

export const styles = StyleSheet.create({
  textinput: {
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'rgba(208, 208, 208, 0.30)',
    backgroundColor: 'rgba(247, 247, 247, 0.70)',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
    paddingLeft: 12,
    height: Calculator(50),
  },
});
