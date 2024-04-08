import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {CellProps} from '../utils/types';

const Cell3: React.FC<CellProps> = ({cellObj}) => {
  const animatedText = useAnimatedStyle(() => {
    return {
      color:
        cellObj.clickType === 'final'
          ? 'green'
          : cellObj.clickType === 'draft'
          ? 'blue'
          : 'black',
      fontSize: cellObj.clickType === 'draft' ? 9 : 15,
    };
  });

  const animatedCell = useAnimatedStyle(() => {
    return {
      justifyContent: cellObj.clickType === 'draft' ? 'flex-start' : 'center',
      alignItems: cellObj.clickType === 'draft' ? 'center' : 'center',
      padding: cellObj.clickType === 'draft' ? 3 : 0,
    };
  });

  const formatDraftDisplay = (
    labelValue: string[] | number[] | null | undefined,
  ) => {
    if (!labelValue) return;

    //update so each number has a static position
    let row1 = [labelValue[0], labelValue[1], labelValue[2]];
    let row2 =
      labelValue.length > 3
        ? [labelValue[3], labelValue[4], labelValue[5]]
        : null;
    let row3 =
      labelValue.length > 5
        ? [labelValue[6], labelValue[7], labelValue[8]]
        : null;

    const displayValue = (
      <>
        <Animated.Text style={[styles.text, animatedText]}>
          {row1}
        </Animated.Text>
        {labelValue.length > 1 && (
          <Animated.Text style={[styles.text, animatedText]}>
            {row2}
          </Animated.Text>
        )}
        {labelValue.length > 3 && (
          <Animated.Text style={[styles.text, animatedText]}>
            {row3}
          </Animated.Text>
        )}
      </>
    );

    return displayValue;
  };

  return (
    <Animated.View style={[styles.cell, animatedCell]}>
      {formatDraftDisplay(cellObj.label)}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  top_container: {
    backgroundColor: 'red',
  },
  flexrow_container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    height: 38,
    width: 38,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  miss: {
    backgroundColor: 'green',
    height: 34,
    width: 34,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 15},
});

export default Cell3;
