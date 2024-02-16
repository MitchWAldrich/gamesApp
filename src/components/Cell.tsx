import {StyleSheet, Text} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';

import {CellProps} from '../utils/types';

const Cell: React.FC<CellProps> = ({
  cellObj,
  hitArray,
  missArray,
  columns,
  rows,
}) => {
  const setLabel = (cellValue: string) => {
    let label: number | null = null;

    if (cellObj.column === 1 && cellValue !== 'A1') {
      label = rows?.length ? rows[cellObj.row - 2]?.length : 0;
    }

    if (cellObj.row === 1 && cellValue !== 'A1') {
      label = columns?.length ? columns[(cellObj.column ?? 0) - 2]?.length : 0;
    }

    return label;
  };

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
      {cellObj.isLabel && <Text>{setLabel(cellObj.value)}</Text>}
      {hitArray && hitArray.includes(cellObj.id) && (
        <FontAwesomeIcon icon={faCircle} />
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
    height: 20,
    width: 20,
    margin: 5,
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

export default Cell;
