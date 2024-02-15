import {useState} from 'react';

import {FlatList, Pressable, StyleSheet, View} from 'react-native';

import {BoardProps} from '../utils/types';

import Button from './Button';
import Cell from './Cell';

import {removeStringItemFromArray} from '../utils/helpers';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const Board: React.FC<BoardProps> = ({puzzle}) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzle);
  const [clickType, setClickType] = useState('default');
  const [hitArray, setHitArray] = useState<string[]>([]);
  const [missArray, setMissArray] = useState<string[]>([]);

  const toggleItemSelect = (clickType: string, id: number) => {
    if (clickType === 'hit') {
      const newArray = [...hitArray];
      newArray.includes(id.toString())
        ? removeStringItemFromArray(newArray, id.toString())
        : newArray.push(id.toString());
      setHitArray(newArray);
    }
    if (clickType === 'miss') {
      const newArray = [...missArray];
      newArray.includes(id.toString())
        ? removeStringItemFromArray(newArray, id.toString())
        : newArray.push(id.toString());
      setMissArray(newArray);
    }
  };

  const targets = ['all targs'];
  /* If targets, then win */

  const setHit = () => {
    setClickType(clickType === 'hit' ? 'default' : 'hit');
  };

  const setMiss = () => {
    setClickType(clickType === 'miss' ? 'default' : 'miss');
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: clickType === 'hit' ? 'green' : 'white',
    };
  });

  return (
    <>
      <View style={styles.flexrow_container}>
        <View style={styles.game_board}>
          <FlatList
            data={currentPuzzle}
            renderItem={({item, index}) => (
              <Pressable onPress={() => toggleItemSelect(clickType, index + 1)}>
                <Cell
                  cellObj={item}
                  hitArray={hitArray}
                  missArray={missArray}
                />
              </Pressable>
            )}
            numColumns={8}
            // horizontal
            // keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View>
        <Animated.View style={[animatedStyles]}>
          <Button title="Hit" onPress={() => setHit()} color="green"></Button>
        </Animated.View>
        <Animated.View style={[animatedStyles]}>
          <Button title="Miss" onPress={() => setMiss()} color="red"></Button>
        </Animated.View>
      </View>
    </>
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
  game_board: {},
  cell: {
    backgroundColor: '#ebedf0',
    height: 20,
    width: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Board;
