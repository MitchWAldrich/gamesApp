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

import {removeStringItemFromArray, sortNumbers} from '../utils/helpers';

const Board3: React.FC<BoardProps> = ({puzzle}) => {
  const [clickType, setClickType] = useState<string>('default');
  const [isDraft, setIsDraft] = useState<boolean>(false);
  const [isFinal, setIsFinal] = useState<boolean>(false);

  const rows = [
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
  ];

  const formatColumn = (column: cellObject[]) => {
    const newArray: cellObject[][] = [];

    for (let i = 0; i < column.length; i++) {
      if (column[i].target === true) {
        const array: cellObject[] = [column[i]];

        while (
          column[i + 1] &&
          column[i + 1].id === (Number(column[i]?.id) + 11).toString() &&
          column[i + 1].target === true
        ) {
          array.push(column[i + 1]);
          i++;
        }
        newArray.push(array);
      }
    }

    return newArray;
  };

  const formatRow = (row: cellObject[]) => {
    const newArray: cellObject[][] = [];

    for (let i = 0; i < row.length; i++) {
      if (row[i].target === true) {
        const array: cellObject[] = [row[i]];

        while (
          row[i + 1] &&
          row[i + 1].id === (Number(row[i]?.id) + 1).toString() &&
          row[i + 1].target === true
        ) {
          array.push(row[i + 1]);
          i++;
        }
        newArray.push(array);
      }
    }

    return newArray;
  };

  const columns = [
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
  ];

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

  const setNumber = () => {
    setClickType(clickType === 'hit' ? 'default' : 'hit');
  };

  const setClick = (writeType: string) => {
    if (writeType === 'draft') {
      setIsDraft(true);
    }

    if (writeType === 'final') {
      setIsFinal(true);
    }
  };

  return (
    <>
      <View style={styles.flexrow_container}>
        <View style={styles.game_board}>
          <FlatList
            data={currentPuzzle}
            renderItem={({item, index}) => (
              <Pressable onPress={() => toggleItemSelect(index + 1)}>
                <Cell3
                  cellObj={item}
                  missArray={pressedArray}
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
              onPress={() => setNumber()}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="2"
              onPress={() => setNumber()}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="3"
              onPress={() => setNumber()}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="4"
              onPress={() => setNumber()}
              color="black"></Button>
          </View>
          <View style={styles.number_buttons}>
            <Button
              title="5"
              onPress={() => setNumber()}
              color="black"></Button>
          </View>
          <View style={styles.draft_button}>
            <Button
              title="Draft"
              onPress={() => setClick('draft')}
              color="grey"></Button>
          </View>
        </View>
        <View>
          <View style={styles.button_container}>
            <View style={styles.number_buttons2}>
              <Button
                title="6"
                onPress={() => setNumber()}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="7"
                onPress={() => setNumber()}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="8"
                onPress={() => setNumber()}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="9"
                onPress={() => setNumber()}
                color="black"></Button>
            </View>
            <View style={styles.number_buttons2}>
              <Button
                title="10"
                onPress={() => setNumber()}
                color="black"></Button>
            </View>
            <View style={styles.final_button}>
              <Button
                title="Final"
                onPress={() => setClick('final')}
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
