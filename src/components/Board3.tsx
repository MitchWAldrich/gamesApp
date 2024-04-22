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

  const toggleItemSelect = (
    id: number | string,
    numberVal: string | number | null,
  ) => {
    if (numberVal === 'draft') setClickType('draft');
    if (numberVal === 'final') {
      setClickType('final');
    }
    if (numberVal !== 'draft' && numberVal !== 'final' && id !== 'button') {
      setCurrentCell(id);
      setCurrentPuzzle(updatePuzzle(currentPuzzle, id, numberVal, clickType));
    }
    console.log('id and number', id, numberVal);
  };

  useEffect(() => {
    if (JSON.stringify(targetIds) === JSON.stringify(pressedArray))
      setIsPuzzleComplete(true);
  }, [pressedArray]);

  const rowValues = getRowValues(currentPuzzle);
  const columnValues = getColumnValues(currentPuzzle);

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
      <View style={styles.button_container}>
        <View style={styles.button_row}>
          <Pressable onPress={() => toggleItemSelect('button', 1)}>
            <Button3 title={1} row={1}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 2)}>
            <Button3 title={2} row={1}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 3)}>
            <Button3 title={3} row={1}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 4)}>
            <Button3 title={4} row={1}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 5)}>
            <Button3 title={5} row={1}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 'draft')}>
            <Button3
              onPress={() => toggleItemSelect}
              title={'Draft'}
              row={1}
              special="draft"></Button3>
          </Pressable>
        </View>
        <View style={styles.button_row}>
          <Pressable onPress={() => toggleItemSelect('button', 6)}>
            <Button3
              onPress={() => toggleItemSelect}
              title={6}
              row={2}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 7)}>
            <Button3
              onPress={() => toggleItemSelect}
              title={7}
              row={2}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 8)}>
            <Button3
              onPress={() => toggleItemSelect}
              title={8}
              row={2}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 9)}>
            <Button3
              onPress={() => toggleItemSelect}
              title={9}
              row={2}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 0)}>
            <Button3
              onPress={() => toggleItemSelect}
              title={0}
              row={2}></Button3>
          </Pressable>
          <Pressable onPress={() => toggleItemSelect('button', 'final')}>
            <Button3
              onPress={() => toggleItemSelect}
              title={'Final'}
              row={2}
              special="final"></Button3>
          </Pressable>
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
