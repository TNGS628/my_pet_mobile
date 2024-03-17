import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    height: '100%',
  },
  proImageCon: {
    height: 120,
    width: 120,
    position: 'relative',
  },
  proImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  imageIcon: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    padding: 10,
    borderRadius: 110,
    backgroundColor: '#3f71ea',
  },
  iconCon: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#f4f7fe',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#50526a',
    marginBottom: 20,
  },

  fieldName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#bfbfbf',
    width: '30%',
  },
  fieldCon: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  main: {
    marginTop: 40,
  },
  fieldBottom: {
    width: '70%',
  },
  divider: {
    padding: 0,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#3f71ea',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: (windowWidth - 200) / 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginRight: 10,
  },
});
