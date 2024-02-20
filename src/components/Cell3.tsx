import {StyleSheet, Text} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {CellProps} from '../utils/types';

const Cell3: React.FC<CellProps> = ({
  cellObj,
  hitArray,
  missArray,
  columns,
  rows,
}) => {
  // const setLabel = (cellValue: string) => {
  //   let label: number | number[] | null | string = null;

  //   if (cellObj.column === 1 && cellValue !== 'A1') {
  //     if (rows) {
  //       if (rows[cellObj.row - 2]?.length > 1) {
  //         label = rows[cellObj.row - 2]?.map(array => array?.length).toString();
  //       } else if (rows[cellObj.row - 2]?.length === 1) {
  //         label = rows[cellObj.row - 2][0]?.length;
  //       } else label = 0;
  //     }
  //   }

  //   if (cellObj.row === 1 && cellValue !== 'A1') {
  //     if (columns) {
  //       if (columns[(cellObj.column ?? 0) - 2]?.length > 1) {
  //         label = columns[(cellObj.column ?? 0) - 2]
  //           ?.map(array => array.length)
  //           .toString();
  //       } else if (columns[(cellObj.column ?? 0) - 2]?.length === 1) {
  //         label = columns[(cellObj.column ?? 0) - 2][0]?.length;
  //       } else label = 0;
  //     }
  //   }

  //   return label;
  // };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: missArray.includes(cellObj.id)
        ? 'red'
        : cellObj.isLabel === true
        ? ''
        : 'white',
    };
  });

  return (
    <Animated.View style={[styles.cell, animatedStyles]}>
      <Text>{cellObj.label}</Text>
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
    height: 30,
    width: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miss: {
    backgroundColor: 'green',
    height: 20,
    width: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cell3;
