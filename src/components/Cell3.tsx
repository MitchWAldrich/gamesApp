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

    let row1 = [0, 0, 0];
    let row2 = [0, 0, 0];
    let row3 = [0, 0, 0];

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
      <Animated.View style={styles.inner_cell_container}>
        <Animated.View style={styles.inner_cell_row}>
          {row1.map((cell, index) => (
            <Animated.View key={index} style={styles.inner_cell}>
              <Animated.Text style={[styles.text, animatedText]}>
                {cell === 0 ? '' : cell}
              </Animated.Text>
            </Animated.View>
          ))}
        </Animated.View>
        <Animated.View style={styles.inner_cell_row}>
          {row2.map((cell, index) => (
            <Animated.View key={index} style={styles.inner_cell}>
              <Animated.Text style={[styles.text, animatedText]}>
                {cell === 0 ? '' : cell}
              </Animated.Text>
            </Animated.View>
          ))}
        </Animated.View>
        <Animated.View style={styles.inner_cell_row}>
          {row3.map((cell, index) => (
            <Animated.View key={index} style={styles.inner_cell}>
              <Animated.Text style={[styles.text, animatedText]}>
                {cell === 0 ? '' : cell}
              </Animated.Text>
            </Animated.View>
          ))}
        </Animated.View>
      </Animated.View>
    );

    return displayValue;
  };

  return (
    <Animated.View style={[styles.cell, animatedCell]}>
      {cellObj.clickType === 'draft' ? (
        formatDraftDisplay(cellObj.label)
      ) : cellObj.label ? (
        <Animated.Text style={[styles.text, animatedText]}>
          {cellObj.label[0]}
        </Animated.Text>
      ) : (
        <Animated.Text style={[styles.text, animatedText]}> </Animated.Text>
      )}
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
  inner_cell: {
    display: 'flex',
    flexDirection: 'row',
    height: 10,
    width: 10,
    justifyContent: 'center',
  },
  inner_cell_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  inner_cell_row: {
    display: 'flex',
    flexDirection: 'row',
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
