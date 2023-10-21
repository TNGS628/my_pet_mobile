import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export default StyleSheet.create({
  head: {
    flexDirection: 'row',
    marginTop: 35,
    // flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // backgroundColor: 'yellow',
  },
  minilogo: {
    width: Calculator(45),
    height: Calculator(45),
    color: 'black',
  },
  menu: {
    width: Calculator(32),
    height: Calculator(32),
    // backgroundColor: 'black',
  },
  search: {
    width: Calculator(45),
    height: Calculator(45),
    // backgroundColor: 'red',
    marginTop: 3,
  },
  headtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#E58A8A',
  },
  pisda: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
