import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export default StyleSheet.create({
  headContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  profileButton: {
    width: Calculator(25),
    height: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingRight: 15,
  },
  backArrow: {
    paddingHorizontal: 20,
    width: 35,
    height: 35,
  },
  smallProfile: {
    borderRadius: 5,
    width: 45,
    height: 45,
    paddingTop: 15,
    paddingRight: 10,
    borderRadius: 100

  },
  smallProfileContainer: {
    width: 45,
    height: 45,
  },
  main: {
    alignItems: 'center',
    
  },
  profileImage: {
    width: Calculator(120),
    height: Calculator(120),
    paddingBottom: 10,
    borderRadius: 100
  },
  editInfo: {
    marginTop: Calculator(20),
    backgroundColor: "#f7f7f7",
    height: Calculator(80),
    borderRadius: 10,
    marginVertical: Calculator(10),
  },
  infoChangeContainer: {
    width: "88%",
  },
  saveButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "roboto",
    color: "#ffffff"
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#36cde9",
    height: Calculator(80),
    justifyContent: "center",
    borderRadius: 10
  }
});
