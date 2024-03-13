import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginBottom: 100,
    justifyContent: "center",
    width: "88%",
    marginLeft: Calculator(25)
  },
  alltext: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#2b2b2b',
    marginBottom: Calculator(15)
  },
  leftarrow: {
    marginTop: 20,
  },
  welcome: {
    fontSize: 25,
    color: '#555555',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 10,
    backgroundColor: 'red'
  },
  conButton: {
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Calculator(25)
  }
});
