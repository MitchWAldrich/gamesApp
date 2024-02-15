import React from 'react';
import {Pressable, Text, StyleSheet, ActivityIndicator} from 'react-native';

import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {ButtonProps} from '../utils/types';

const Button: React.FC<ButtonProps> = ({
  onPress,
  onLongPress,
  title,
  color,
  disabled,
  loading,
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: color,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        style={disabled ? styles.disabledButton : styles.button}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 25,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  disabledButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
