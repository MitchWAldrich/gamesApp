import {Pressable} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {styles} from '../styles/board3styles';
import {Button3Props} from '../utils/types';
import {useState} from 'react';

const Button3: React.FC<Button3Props> = ({onPress, title, row, special}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const animatedButton = useAnimatedStyle(() => {
    return isPressed
      ? {
          backgroundColor: 'black',
        }
      : {
          backgroundColor: 'white',
        };
  });

  const animatedDraftButton = useAnimatedStyle(() => {
    return isPressed
      ? {
          backgroundColor: 'blue',
        }
      : {
          backgroundColor: 'white',
        };
  });

  const animatedFinalButton = useAnimatedStyle(() => {
    return isPressed
      ? {
          backgroundColor: 'green',
        }
      : {
          backgroundColor: 'white',
        };
  });

  const animatedButtonText = useAnimatedStyle(() => {
    return isPressed
      ? {
          color: 'white',
          fontWeight: 'bold',
        }
      : {
          color: 'black',
          fontWeight: 'normal',
        };
  });

  const animatedDraftText = useAnimatedStyle(() => {
    return isPressed
      ? {
          color: 'white',
          fontWeight: 'bold',
        }
      : {
          color: 'blue',
          fontWeight: 'normal',
        };
  });

  const animatedFinalText = useAnimatedStyle(() => {
    return isPressed
      ? {
          color: 'white',
          fontWeight: 'bold',
        }
      : {
          color: 'green',
          fontWeight: 'normal',
        };
  });

  // const buttonPress = (titleVal: string | number | null | undefined) => {
  const buttonPress = (type: string | number | null | undefined) => {
    if (onPress) onPress('button', type);

    setIsPressed(!isPressed);
  };

  return (
    <>
      {row === 1 && special !== 'draft' && (
        <Animated.View style={[styles.number_buttons, animatedButton]}>
          <Pressable onPress={() => buttonPress(title)}>
            <Animated.Text style={[styles.button_text, animatedButtonText]}>
              {title}
            </Animated.Text>
          </Pressable>
        </Animated.View>
      )}
      {row === 1 && special === 'draft' && (
        <Animated.View style={[styles.draft_button, animatedDraftButton]}>
          <Pressable onPress={() => buttonPress('draft')}>
            <Animated.Text style={[styles.draft_text, animatedDraftText]}>
              {title}
            </Animated.Text>
          </Pressable>
        </Animated.View>
      )}
      {row === 2 && title !== 0 && special !== 'final' && (
        <Animated.View style={[styles.number_buttons2, animatedButton]}>
          <Pressable onPress={() => buttonPress(title)}>
            <Animated.Text style={[styles.button_text, animatedButtonText]}>
              {title}
            </Animated.Text>
          </Pressable>
        </Animated.View>
      )}
      {row === 2 && title === 0 && (
        <Animated.View style={[styles.number_buttons0, animatedButton]}>
          <Pressable onPress={() => buttonPress(title)}>
            <Animated.Text
              style={[styles.button_text, animatedButtonText]}></Animated.Text>
          </Pressable>
        </Animated.View>
      )}
      {row === 2 && special === 'final' && (
        <Animated.View style={[styles.final_button, animatedFinalButton]}>
          <Pressable onPress={() => buttonPress('final')}>
            <Animated.Text style={[styles.final_text, animatedFinalText]}>
              {title}
            </Animated.Text>
          </Pressable>
        </Animated.View>
      )}
    </>
  );
};

export default Button3;
