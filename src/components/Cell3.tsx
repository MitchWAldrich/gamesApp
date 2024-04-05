import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {CellProps} from '../utils/types';

const Cell3: React.FC<CellProps> = ({
  cellObj,
  currentCell,
  finalNumber,
  hitArray,
}) => {
  const [cellValue, setCellValue] = useState<
    string | number | null | undefined
  >(null);

  const animatedText = useAnimatedStyle(() => {
    return {
      color: hitArray?.includes(cellObj.id)
        ? 'green'
        : cellObj.isLabel === true
        ? ''
        : 'black',
    };
  });

  return (
    <View style={styles.cell}>
      <Animated.Text style={[styles.text, animatedText]}>
        {cellObj.label !== null
          ? cellObj.label
          : currentCell === cellObj.id
          ? finalNumber
          : null}
      </Animated.Text>
    </View>
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
    height: 30,
    width: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  miss: {
    backgroundColor: 'green',
    height: 20,
    width: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});

export default Cell3;
