import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default function widthCalculator(width2) {
    const urgun = (width2 * 100) / 375;

    const daraah = (width * urgun) / 100;

    return daraah;
}
