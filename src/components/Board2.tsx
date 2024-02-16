import {useEffect, useState} from 'react';

import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import {BoardProps, cellObject, puzzleArray} from '../utils/types';

import Cell from './Cell';

import {removeStringItemFromArray, sortNumbers} from '../utils/helpers';

const Board2: React.FC<BoardProps> = ({puzzle}) => {
  const [currentPuzzle, setCurrentPuzzle] = useState<puzzleArray>(puzzle);
  const [currentRows, setCurrentRows] = useState<cellObject[][]>([
    puzzle.filter(cell => cell.row === 2 && cell.target === true),
    puzzle.filter(cell => cell.row === 3 && cell.target === true),
    puzzle.filter(cell => cell.row === 4 && cell.target === true),
    puzzle.filter(cell => cell.row === 5 && cell.target === true),
    puzzle.filter(cell => cell.row === 6 && cell.target === true),
    puzzle.filter(cell => cell.row === 7 && cell.target === true),
    puzzle.filter(cell => cell.row === 8 && cell.target === true),
    puzzle.filter(cell => cell.row === 9 && cell.target === true),
    puzzle.filter(cell => cell.row === 10 && cell.target === true),
    puzzle.filter(cell => cell.row === 11 && cell.target === true),
  ]);

  const [currentColumns, setCurrentColumns] = useState<cellObject[][]>([
    puzzle.filter(cell => cell.column === 2 && cell.target === true),
    puzzle.filter(cell => cell.column === 3 && cell.target === true),
    puzzle.filter(cell => cell.column === 4 && cell.target === true),
    puzzle.filter(cell => cell.column === 5 && cell.target === true),
    puzzle.filter(cell => cell.column === 6 && cell.target === true),
    puzzle.filter(cell => cell.column === 7 && cell.target === true),
    puzzle.filter(cell => cell.column === 8 && cell.target === true),
    puzzle.filter(cell => cell.column === 9 && cell.target === true),
    puzzle.filter(cell => cell.column === 10 && cell.target === true),
    puzzle.filter(cell => cell.column === 11 && cell.target === true),
  ]);

  const [pressedArray, setPressedArray] = useState<string[]>([]);

  const toggleItemSelect = (id: number) => {
    const newArray = [...pressedArray];

    newArray.includes(id.toString())
      ? removeStringItemFromArray(newArray, id.toString())
      : newArray.push(id.toString());

    sortNumbers(newArray);
    setPressedArray(newArray);
  };

  useEffect(() => {
    if (JSON.stringify(targetIds) === JSON.stringify(pressedArray))
      setIsPuzzleComplete(true);
  }, [pressedArray]);

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

  return (
    <>
      <View style={styles.flexrow_container}>
        <View style={styles.game_board}>
          <FlatList
            data={currentPuzzle}
            renderItem={({item, index}) => (
              <Pressable onPress={() => toggleItemSelect(index + 1)}>
                <Cell
                  cellObj={item}
                  missArray={pressedArray}
                  rows={currentRows}
                  columns={currentColumns}
                />
              </Pressable>
            )}
            numColumns={11}
          />
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

export default Board2;
