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
    // let row1 = [labelValue[0], labelValue[1], labelValue[2]];
    // let row2? =
    //   labelValue.length > 3
    //     ? [labelValue[3], labelValue[4], labelValue[5]]
    //     : null;
    // let row3 =
    //   labelValue.length > 5
    //     ? [labelValue[6], labelValue[7], labelValue[8]]
    //     : null;

    let row1 = [0, 0, 0];
    let row2 = [0, 0, 0];
    let row3 = [0, 0, 0];
    // let row2 = labelValue.length > 3 ? [0, 0, 0] : null;
    // let row3 = labelValue.length > 5 ? [0, 0, 0] : null;

    if (cellObj.clickType === 'draft') {
      for (let i = 0; i < labelValue.length; i++) {
        if (labelValue[i] === 1) row1.splice(0, 1, 1);
        if (labelValue[i] === 2) row1.splice(1, 1, 2);
        if (labelValue[i] === 3) row1.splice(2, 1, 3);
        if (labelValue[i] === 4) row2?.splice(0, 1, 4);
        if (labelValue[i] === 5) row2?.splice(1, 1, 5);
        if (labelValue[i] === 6) row2?.splice(2, 1, 6);
        if (labelValue[i] === 7) row3?.splice(0, 1, 7);
        if (labelValue[i] === 8) row3?.splice(1, 1, 8);
        if (labelValue[i] === 9) row3?.splice(2, 1, 9);
      }
    }

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
