import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import dimensions from '../common/helpers/dimensions';
import {HEADER_HEIGHT} from '../components/Header';
import UIHelper from '../common/helpers/UIHelper';

export const SHUFFLE_BUTTON_HEIGHT = 50;
const TOP = 340;

const OFFSET_TOP = HEADER_HEIGHT * dimensions.ratio + 20;

const AddWordBtn = ({offsetY, onPress}) => {
  const translateY = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [0, -350 + OFFSET_TOP],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;

  const scale = new Animated.Value(1);

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: translateY}, {scale}]},
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPressIn={() =>
          Animated.timing(scale, UIHelper.btnScaleAnim.in).start()
        }
        onPressOut={() =>
          Animated.timing(scale, UIHelper.btnScaleAnim.out).start()
        }
        onPress={onPress}>
        <Text style={styles.btnText}>Add Word</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: TOP,
    alignItems: 'center',
    height: SHUFFLE_BUTTON_HEIGHT,
    zIndex: 1,
  },
  button: {
    width: 230,
    height: SHUFFLE_BUTTON_HEIGHT,
    backgroundColor: '#1E2125',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default AddWordBtn;
