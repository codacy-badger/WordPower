import Animated from 'react-native-reanimated';
import dimensions from '../helpers/dimensions';
import {useRef} from 'react';

const useHomeAnim = offsetY => {
  const opacityAnim = useRef(
    offsetY.interpolate({
      inputRange: [0, 220],
      outputRange: [1, 0.4],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;

  const heightAnim = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [60, 14],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;

  const translateAnim = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 54 * dimensions.ratio],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;
  return {opacityAnim, heightAnim, translateAnim};
};

export default useHomeAnim;
