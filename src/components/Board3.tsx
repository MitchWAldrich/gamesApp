import {useEffect, useState} from 'react';

import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {BoardProps, cellObject, puzzleArray} from '../utils/types';

import Cell3 from './Cell3';

import {
  formatColumn,
  formatRow,
  sortNumbers,
  updatePuzzle,
} from '../utils/helpers';

const Board3: React.FC<BoardProps> = ({puzzle}) => {
  const [clickType, setClickType] = useState<string>('default');
  const [number, setNumber] = useState<string | number | null>(null);
  const [currentCell, setCurrentCell] = useState<string | number | null>(null);
  const [currentPuzzle, setCurrentPuzzle] = useState<puzzleArray>(puzzle);

  const [currentRows, setCurrentRows] = useState<cellObject[][][]>([
    formatRow(puzzle.filter(cell => cell.row === 2 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 3 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 4 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 5 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 6 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 7 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 8 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 9 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 10 && cell.target === true)),
    formatRow(puzzle.filter(cell => cell.row === 11 && cell.target === true)),
  ]);

  const [currentColumns, setCurrentColumns] = useState<cellObject[][][]>([
    formatColumn(
      puzzle.filter(cell => cell.column === 2 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 3 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 4 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 5 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 6 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 7 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 8 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 9 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 10 && cell.target === true),
    ),
    formatColumn(
      puzzle.filter(cell => cell.column === 11 && cell.target === true),
    ),
  ]);

  const [pressedArray, setPressedArray] = useState<string[]>([]);

  const toggleItemSelect = (
    id: number | string,
    numberVal: string | number | null,
  ) => {
    setCurrentCell(id);
    setCurrentPuzzle(updatePuzzle(currentPuzzle, id, numberVal, clickType));
    console.log('id and number', id, numberVal);
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

  console.log('type and number', clickType, number);
  return (
    <>
      <View style={styles.flexrow_container}>
        <View style={styles.game_board}>
          <FlatList
            data={currentPuzzle}
            renderItem={({item, index}) => (
              <Pressable onPress={() => toggleItemSelect(item.id, number)}>
                <Cell3
                  cellObj={item}
                  hitArray={pressedArray}
                  finalNumber={number}
                  currentCell={currentCell}
                  // rows={currentRows}
                  // columns={currentColumns}
                />
              </Pressable>
            )}
            numColumns={9}
          />
        </View>
      </View>
      <View>
        <View style={styles.button_container}>
          <View style={styles.number_buttons}>
            <Button
              title="1"
              onPress={() => setNumber(1)}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="2"
              onPress={() => setNumber(2)}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="3"
              onPress={() => setNumber(3)}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="4"
              onPress={() => setNumber(4)}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="5"
              onPress={() => setNumber(5)}
              color="black"></Button>
          </View>
          <View style={styles.draft_button}>
            <Button
              title="Draft"
              onPress={() => setClickType('draft')}
              color="grey"></Button>
          </View>
        </View>
        <View>
          <View style={styles.button_container}>
            <View style={styles.number_buttons2}>
              <Button
                title="6"
                onPress={() => setNumber(6)}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="7"
                onPress={() => setNumber(7)}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="8"
                onPress={() => setNumber(8)}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="9"
                onPress={() => setNumber(9)}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="0"
                onPress={() => setNumber(0)}
                color="black"></Button>
            </View>
            <View style={styles.final_button}>
              <Button
                title="Final"
                onPress={() => setClickType('final')}
                color="green"></Button>
            </View>
          </View>
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
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  number_buttons: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
  },
  number_buttons2: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
  },
  draft_button: {
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 5,
  },
  final_button: {
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 10,
  },
});

export default Board3;
