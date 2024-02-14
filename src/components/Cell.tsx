import {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
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
  clickType: string;
  // valueCallback: (cellValue: string, clickType: string) => void;
};

const Cell: React.FC<CellProps> = ({cellObj, clickType}) => {
  const [cellType, setCellType] = useState(cellObj.clickType);
  const [isPressed, setIsPressed] = useState(false);

  const targets = ['all targs'];
  /* If targets, then win */

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: cellObj.clickType === 'miss' ? 'green' : 'white',
    };
  });

  const handlePress = () => {
    setIsPressed(!isPressed);
    // valueCallback(cellObj.value, clickType);
  };

  return <Animated.View style={[styles.cell, animatedStyles]}></Animated.View>;
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
    // backgroundColor: '#ebedf0',
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
