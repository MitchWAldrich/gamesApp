import {useEffect, useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';

import {BoardProps, cellObject, puzzleArray} from '../utils/types';

import Button3 from './Button3';
import Cell3 from './Cell3';

import {
  getColumnValues,
  getRowValues,
  sortNumbers,
  updatePuzzle,
} from '../utils/helpers';
import {styles} from '../styles/board3styles';

const Board3: React.FC<BoardProps> = ({puzzle}) => {
  const [clickType, setClickType] = useState<string>('default');
  const [number, setNumber] = useState<string | number | null>(null);
  const [currentCell, setCurrentCell] = useState<string | number | null>(null);
  const [currentPuzzle, setCurrentPuzzle] = useState<puzzleArray>(puzzle);
  const [pressedArray, setPressedArray] = useState<string[]>([]);

  const rowValues = getRowValues(currentPuzzle);
  const columnValues = getColumnValues(currentPuzzle);

  const toggleItemSelect = (
    id: number | string,
    numberVal: string | number | null,
    row: number | string,
    column: number | string,
  ) => {
    if (id === 'button') {
      if (numberVal === 'draft') {
        setClickType(clickType === 'draft' ? 'default' : 'draft');
      } else if (numberVal === 'final') {
        setClickType(clickType === 'final' ? 'default' : 'final');
      } else {
        setNumber(number === numberVal ? null : numberVal);
      }
    }

    if (numberVal !== 'draft' && numberVal !== 'final' && id !== 'button') {
      setCurrentCell(id);
      setCurrentPuzzle(
        updatePuzzle(
          currentPuzzle,
          id,
          number,
          clickType,
          rowValues[Number(row) - 1],
          columnValues[Number(column) - 1],
        ),
      );
    }
    console.log('clickType and number', clickType, numberVal);
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
              <Pressable
                onPress={() =>
                  toggleItemSelect(item.id, number, item.row, item.column)
                }>
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
      <View style={styles.button_container}>
        <View style={styles.button_row}>
          <Button3 valueCallback={toggleItemSelect} title={1} row={1}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={2} row={1}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={3} row={1}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={4} row={1}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={5} row={1}></Button3>
          <Button3
            valueCallback={toggleItemSelect}
            title={'Draft'}
            row={1}
            special="draft"></Button3>
        </View>
        <View style={styles.button_row}>
          <Button3 valueCallback={toggleItemSelect} title={6} row={2}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={7} row={2}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={8} row={2}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={9} row={2}></Button3>
          <Button3 valueCallback={toggleItemSelect} title={0} row={2}></Button3>
          <Button3
            valueCallback={toggleItemSelect}
            title={'Final'}
            row={2}
            special="final"></Button3>
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

export default Board3;

// const [currentRows, setCurrentRows] = useState<cellObject[][][]>([
//   formatRow(puzzle.filter(cell => cell.row === 2 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 3 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 4 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 5 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 6 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 7 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 8 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 9 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 10 && cell.target === true)),
//   formatRow(puzzle.filter(cell => cell.row === 11 && cell.target === true)),
// ]);
// const [currentColumns, setCurrentColumns] = useState<cellObject[][][]>([
//   formatColumn(
//     puzzle.filter(cell => cell.column === 2 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 3 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 4 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 5 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 6 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 7 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 8 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 9 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 10 && cell.target === true),
//   ),
//   formatColumn(
//     puzzle.filter(cell => cell.column === 11 && cell.target === true),
//   ),
// ]);
