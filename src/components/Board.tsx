import {useEffect, useState} from 'react';

import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import {BoardProps, cellObject, puzzleArray} from '../utils/types';

import Button from './Button';
import Cell from './Cell';

import {removeStringItemFromArray, sortNumbers} from '../utils/helpers';

const Board: React.FC<BoardProps> = ({puzzle}) => {
  const [currentPuzzle, setCurrentPuzzle] = useState<puzzleArray>(puzzle);
  const [clickType, setClickType] = useState<string>('default');
  const [hitArray, setHitArray] = useState<string[]>([]);
  const [missArray, setMissArray] = useState<string[]>([]);

  const toggleItemSelect = (clickType: string, id: number) => {
    if (clickType === 'hit') {
      const newArray = [...hitArray];

      newArray.includes(id.toString())
        ? removeStringItemFromArray(newArray, id.toString())
        : newArray.push(id.toString());

      sortNumbers(newArray);

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

  useEffect(() => {
    if (JSON.stringify(targetIds) === JSON.stringify(hitArray))
      setIsPuzzleComplete(true);
  }, [hitArray]);

  const getTargetIds = (puzzle: puzzleArray) => {
    const targetsArray: string[] = [];
    const targetObjects = puzzle.filter(
      (cell: cellObject) => cell.target === true,
    );
    targetObjects.forEach((cell: cellObject) => targetsArray.push(cell.id));
    sortNumbers(targetsArray);

    return targetsArray;
  };

  const targetIds = getTargetIds(currentPuzzle);

  const [isPuzzleComplete, setIsPuzzleComplete] = useState<boolean>(false);

  const setHit = () => {
    setClickType(clickType === 'hit' ? 'default' : 'hit');
  };

  const setMiss = () => {
    setClickType(clickType === 'miss' ? 'default' : 'miss');
  };

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
          />
        </View>
      </View>
      <View>
        <View>
          <Button title="Hit" onPress={() => setHit()} color="green"></Button>
        </View>
        <View>
          <Button title="Miss" onPress={() => setMiss()} color="red"></Button>
        </View>
      </View>
      {isPuzzleComplete && (
        <View style={styles.win_container}>
          <Text style={styles.win_text}>You Win!</Text>
        </View>
      )}
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
  win_container: {
    alignItems: 'center',
    marginTop: 25,
  },
  win_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Board;
