import {useState} from 'react';

import {Button, FlatList, Pressable, StyleSheet, View} from 'react-native';

import Cell from './Cell';

export type BoardProps = {
  puzzle: {
    id: string;
    value: string;
    row: string;
    column: number | null;
    target: boolean | null;
    clickType: string;
  }[];
};

const Board: React.FC<BoardProps> = ({puzzle}) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzle);
  const [clickType, setClickType] = useState('default');

  const toggleItemSelect = (clickType: string, id: number) => {
    const cellIndex = currentPuzzle.findIndex(
      cell => cell.id === id.toString(),
    );

    const cell = {
      id: currentPuzzle[cellIndex].id,
      value: currentPuzzle[cellIndex].value,
      row: currentPuzzle[cellIndex].row,
      column: currentPuzzle[cellIndex].column,
      target: currentPuzzle[cellIndex].target,
      clickType: clickType,
    };

    cell.clickType = clickType;
    currentPuzzle.splice(cellIndex, 1, cell);
    const updatedPuzzle = currentPuzzle.splice(cellIndex, 1, cell);

    setCurrentPuzzle(updatedPuzzle);
  };

  const targets = ['all targs'];
  /* If targets, then win */

  const puzzleRowA = currentPuzzle.filter(cell => cell.row === 'A');
  const puzzleRowB = currentPuzzle.filter(cell => cell.row === 'B');
  const puzzleRowC = currentPuzzle.filter(cell => cell.row === 'C');
  const puzzleRowD = currentPuzzle.filter(cell => cell.row === 'D');
  const puzzleRowE = currentPuzzle.filter(cell => cell.row === 'E');
  const puzzleRowF = currentPuzzle.filter(cell => cell.row === 'F');
  const puzzleRowG = currentPuzzle.filter(cell => cell.row === 'G');
  const puzzleRowH = currentPuzzle.filter(cell => cell.row === 'H');

  return (
    <>
      <View style={styles.flexrow_container}>
        <View style={styles.game_board}>
          <FlatList
            data={puzzle}
            renderItem={({item, index}) => (
              <Pressable onPress={() => toggleItemSelect(clickType, index + 1)}>
                <Cell
                  cellObj={item}
                  clickType={clickType}
                  // valueCallback={getClickValue}
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
        <Button
          title="Hit"
          onPress={() =>
            setClickType(clickType === 'default' ? 'hit' : 'default')
          }></Button>
        <Button
          title="Miss"
          onPress={() =>
            setClickType(clickType === 'default' ? 'miss' : 'default')
          }></Button>
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

/*
  puzzleArray: {
    id: string;
    value: string;
    row: string;
    column: number | null;
    target: boolean | null;
    clickType: string;
  }[],
  newCell: {
    id: string;
    value: string;
    row: string;
    column: number | null;
    target: boolean | null;
    clickType: string;
  },
  */
