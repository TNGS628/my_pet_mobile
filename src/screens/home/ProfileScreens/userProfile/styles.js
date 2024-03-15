import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export default StyleSheet.create({
  headContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  profileMoreButton: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
    // paddingBottom: 0,
  },
  proImagCon: {
    height: 100,
    width: 100,
    borderRadius: 40,
    position: 'relative',
  },
  proImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    overflow: 'hidden',
  },
  profileHeadCon: {
    width: '100%',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 5,
  },
  phone: {
    fontSize: 16,
    fontWeight: '200',
    color: '#fff',
    marginBottom: 20,
  },
  editButtonContainer: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    backgroundColor: '#f2994b',
    padding: 3,
  },
  menuHeadTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172B47',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: '500',
    color: '#172B47',
  },
  menuItemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '100%',
    height: '110%',
    // width: '100%',
    // height: '100%',
    position: 'absolute',
    zIndex: -1,
    elevation: -1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    elevation: -1,
  },
});
