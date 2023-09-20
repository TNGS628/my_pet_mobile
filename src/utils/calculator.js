import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default function Calculator(inHeight) {
    return (height * inHeight) / 812;
}

export const HeightCalculator = (inHeight) => (height * inHeight) / 812;
export const WidthCalculator = (inWidth) => (width * inWidth) / 375;
