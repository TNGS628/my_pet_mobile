import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  textinput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(208, 208, 208, 0.30)',
    backgroundColor: 'rgba(247, 247, 247, 0.70)',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
    paddingLeft: 12,
  },
});
