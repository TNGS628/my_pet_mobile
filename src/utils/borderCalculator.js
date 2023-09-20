import { Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;

export default function borderCalculator(height2, border) {
    const undur = (height2 * 100) / 812;
    const daraah = (height * undur) / 100;

    const radius = (daraah * border) / height2;

    console.log('borderCalculator', border, radius);

    return radius;
}
