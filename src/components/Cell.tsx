import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';

export type CellProps = {
  cellObj: {
    id: string;
    value: string;
    row: string;
    column: number | null;
    target: boolean | null;
    clickType: string;
  };
  hitArray: string[];
  missArray: string[];
};

const Cell: React.FC<CellProps> = ({cellObj, hitArray, missArray}) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: missArray.includes(cellObj.id) ? 'red' : 'white',
    };
  });

  return (
    <Animated.View style={[styles.cell, animatedStyles]}>
      {hitArray.includes(cellObj.id) && <FontAwesomeIcon icon={faCircle} />}
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
