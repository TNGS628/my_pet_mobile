import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  my: {
    fontSize: 40,
    fontFamily: 'kopub batang',
    color: 'rgb(70,171,205)',
    marginTop: Calculator(100),
  },
  pet: {
    fontSize: 40,
    fontFamily: 'Kopub batang',
    color: 'rgb(64,64,64)',
    marginTop: Calculator(100),
  },
  passwordContainer: {
    // backgroundColor: "red",
    height: Calculator(50),
    justifyContent: "center",

  },
  textinputContainer: {
    justifyContent: "space-between",
    
  },
  forget_password: {
    fontSize: 16,
    fontFamily: 'Roboto',
    alignItems: 'center',
    marginTop: 20,
  },
  headlogos: {
    marginTop: 30,
    height: 60,
    width: 60,
    marginTop: 35,
  },
  forgetpasswordcontainer: {
    alignItems: 'center',
    marginBottom: 50,
  },

  registercontainer: {
    alignItems: 'center',
  },
  faceid: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
    height: 40,
    marginTop: 30,
  },
});
