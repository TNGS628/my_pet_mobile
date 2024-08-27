import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    flexGrow: 1,
    padding: Calculator(20),
    paddingTop: 0,
    justifyContent: 'center',
  },
  authContainerText: {
    fontSize: 14,
    color: "grey"
  },
  loginImageView: {
    width: '100%',
              height: 250,
              paddingTop: Calculator(40),
              marginBottom: Calculator(20),
  },
  loginImage: {
    width: '100%', 
    height: '100%', 
    borderRadius: 16, 
    marginTop: Calculator(50), 
    marginBottom: Calculator(30)
  },
  textInputBorder: {
    color: 'black',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    wdith: '100%',
  }
  
});
