import { StyleSheet } from 'react-native';
import Calculator from 'src/utils/calculator';

export default StyleSheet.create({
  headContainer: {
    flex: 1,
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
  },
  smallProfileContainer: {
    width: 45,
    height: 45,
  },
  bioFont: {
    color: "#656566",
    fontWeight: "300"
  },
  main: {
    alignItems: 'center',
  },
  profileImage: {
    width: 85,
    height: 85,
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'roboto',
    paddingBottom: 10,
  },
  achievements: {
    borderRadius: 10,
    alignItems: 'center',
    height: Calculator(30),
    width: 100,
    backgroundColor: 'red',
  },
  achContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  overallRating: {
    fontSize: 25,
    color: "#656566"
  },
  review: {
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ratings: {
    flexDirection: 'row',
    paddingRight: Calculator(90),
  },
  description: {
    width: '80%',
    justifyContent: 'center',
  },
  qualify: {
    fontSize: 20,
    fontStyle: 'roboto',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  quali: {
    width: '80%',
    alignItems: 'flex-start',
    paddingVertical: 20,
    fontWeight: "300",
  },
  qualiText: {
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 15,
    color: "#656566",
    fontWeight: "300"
  },
  miniLink: {
    width: Calculator(30),
    height: Calculator(30),
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  star: {
    width: 30,
    height: 30,
  },
  bio: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  starBox: {
    width: '84%',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  editButton: {
    width: Calculator(30),
    height: Calculator(30)
  },
  bioEdit: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
