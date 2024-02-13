import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Button} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Cell from './src/components/Cell';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const [puzzle, setPuzzle] = useState(JSON.parse(JSON.stringify(initialPuzzle)))

  const puzzle = [
    {value: 'A1', row: 'A', column: 1, target: true, clickType: 'default'},
    {value: 'A2', row: 'A', column: 2, target: false, clickType: 'default'},
    {value: 'A3', row: 'A', column: 3, target: true, clickType: 'default'},
    {value: 'A4', row: 'A', column: 4, target: true, clickType: 'default'},
    {value: 'A5', row: 'A', column: 5, target: true, clickType: 'default'},
    {value: 'A6', row: 'A', column: 6, target: false, clickType: 'default'},
    {value: 'A7', row: 'A', column: 7, target: true, clickType: 'default'},
    {value: 'A8', row: 'A', column: 8, target: false, clickType: 'default'},
    {value: 'B1', row: 'B', column: 1, target: true, clickType: 'default'},
    {value: 'B2', row: 'B', column: 2, target: false, clickType: 'default'},
    {value: 'B3', row: 'B', column: 3, target: true, clickType: 'default'},
    {value: 'B4', row: 'B', column: 4, target: true, clickType: 'default'},
    {value: 'B5', row: 'B', column: 5, target: true, clickType: 'default'},
    {value: 'B6', row: 'B', column: 6, target: false, clickType: 'default'},
    {value: 'B7', row: 'B', column: 7, target: true, clickType: 'default'},
    {value: 'B8', row: 'B', column: 8, target: false, clickType: 'default'},
    {value: 'C1', row: 'C', column: 1, target: true, clickType: 'default'},
    {value: 'C2', row: 'C', column: 2, target: false, clickType: 'default'},
    {value: 'C3', row: 'C', column: 3, target: true, clickType: 'default'},
    {value: 'C4', row: 'C', column: 4, target: true, clickType: 'default'},
    {value: 'C5', row: 'C', column: 5, target: true, clickType: 'default'},
    {value: 'C6', row: 'C', column: 6, target: false, clickType: 'default'},
    {value: 'C7', row: 'C', column: 7, target: true, clickType: 'default'},
    {value: 'C8', row: 'C', column: 8, target: false, clickType: 'default'},
    {value: 'D1', row: 'D', column: 1, target: true, clickType: 'default'},
    {value: 'D2', row: 'D', column: 2, target: false, clickType: 'default'},
    {value: 'D3', row: 'D', column: 3, target: true, clickType: 'default'},
    {value: 'D4', row: 'D', column: 4, target: true, clickType: 'default'},
    {value: 'D5', row: 'D', column: 5, target: true, clickType: 'default'},
    {value: 'D6', row: 'D', column: 6, target: false, clickType: 'default'},
    {value: 'D7', row: 'D', column: 7, target: true, clickType: 'default'},
    {value: 'D8', row: 'D', column: 8, target: false, clickType: 'default'},
    {value: 'E1', row: 'E', column: 1, target: true, clickType: 'default'},
    {value: 'E2', row: 'E', column: 2, target: false, clickType: 'default'},
    {value: 'E3', row: 'E', column: 3, target: true, clickType: 'default'},
    {value: 'E4', row: 'E', column: 4, target: true, clickType: 'default'},
    {value: 'E5', row: 'E', column: 5, target: true, clickType: 'default'},
    {value: 'E6', row: 'E', column: 6, target: false, clickType: 'default'},
    {value: 'E7', row: 'E', column: 7, target: true, clickType: 'default'},
    {value: 'E8', row: 'E', column: 8, target: false, clickType: 'default'},
    {value: 'F1', row: 'F', column: 1, target: true, clickType: 'default'},
    {value: 'F2', row: 'F', column: 2, target: false, clickType: 'default'},
    {value: 'F3', row: 'F', column: 3, target: true, clickType: 'default'},
    {value: 'F4', row: 'F', column: 4, target: true, clickType: 'default'},
    {value: 'F5', row: 'F', column: 5, target: true, clickType: 'default'},
    {value: 'F6', row: 'F', column: 6, target: false, clickType: 'default'},
    {value: 'F7', row: 'F', column: 7, target: true, clickType: 'default'},
    {value: 'F8', row: 'F', column: 8, target: false, clickType: 'default'},
    {value: 'G1', row: 'G', column: 1, target: true, clickType: 'default'},
    {value: 'G2', row: 'G', column: 2, target: false, clickType: 'default'},
    {value: 'G3', row: 'G', column: 3, target: true, clickType: 'default'},
    {value: 'G4', row: 'G', column: 4, target: true, clickType: 'default'},
    {value: 'G5', row: 'G', column: 5, target: true, clickType: 'default'},
    {value: 'G6', row: 'G', column: 6, target: false, clickType: 'default'},
    {value: 'G7', row: 'G', column: 7, target: true, clickType: 'default'},
    {value: 'G8', row: 'G', column: 8, target: false, clickType: 'default'},
    {value: 'H1', row: 'H', column: 1, target: true, clickType: 'default'},
    {value: 'H2', row: 'H', column: 2, target: false, clickType: 'default'},
    {value: 'H3', row: 'H', column: 3, target: true, clickType: 'default'},
    {value: 'H4', row: 'H', column: 4, target: true, clickType: 'default'},
    {value: 'H5', row: 'H', column: 5, target: true, clickType: 'default'},
    {value: 'H6', row: 'H', column: 6, target: false, clickType: 'default'},
    {value: 'H7', row: 'H', column: 7, target: true, clickType: 'default'},
    {value: 'H8', row: 'H', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowA = [
    {value: 'A1', row: 'A', column: 1, target: true, clickType: 'default'},
    {value: 'A2', row: 'A', column: 2, target: false, clickType: 'default'},
    {value: 'A3', row: 'A', column: 3, target: true, clickType: 'default'},
    {value: 'A4', row: 'A', column: 4, target: true, clickType: 'default'},
    {value: 'A5', row: 'A', column: 5, target: true, clickType: 'default'},
    {value: 'A6', row: 'A', column: 6, target: false, clickType: 'default'},
    {value: 'A7', row: 'A', column: 7, target: true, clickType: 'default'},
    {value: 'A8', row: 'A', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowB = [
    {value: 'B1', row: 'B', column: 1, target: true, clickType: 'default'},
    {value: 'B2', row: 'B', column: 2, target: false, clickType: 'default'},
    {value: 'B3', row: 'B', column: 3, target: true, clickType: 'default'},
    {value: 'B4', row: 'B', column: 4, target: true, clickType: 'default'},
    {value: 'B5', row: 'B', column: 5, target: true, clickType: 'default'},
    {value: 'B6', row: 'B', column: 6, target: false, clickType: 'default'},
    {value: 'B7', row: 'B', column: 7, target: true, clickType: 'default'},
    {value: 'B8', row: 'B', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowC = [
    {value: 'C1', row: 'C', column: 1, target: true, clickType: 'default'},
    {value: 'C2', row: 'C', column: 2, target: false, clickType: 'default'},
    {value: 'C3', row: 'C', column: 3, target: true, clickType: 'default'},
    {value: 'C4', row: 'C', column: 4, target: true, clickType: 'default'},
    {value: 'C5', row: 'C', column: 5, target: true, clickType: 'default'},
    {value: 'C6', row: 'C', column: 6, target: false, clickType: 'default'},
    {value: 'C7', row: 'C', column: 7, target: true, clickType: 'default'},
    {value: 'C8', row: 'C', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowD = [
    {value: 'D1', row: 'D', column: 1, target: true, clickType: 'default'},
    {value: 'D2', row: 'D', column: 2, target: false, clickType: 'default'},
    {value: 'D3', row: 'D', column: 3, target: true, clickType: 'default'},
    {value: 'D4', row: 'D', column: 4, target: true, clickType: 'default'},
    {value: 'D5', row: 'D', column: 5, target: true, clickType: 'default'},
    {value: 'D6', row: 'D', column: 6, target: false, clickType: 'default'},
    {value: 'D7', row: 'D', column: 7, target: true, clickType: 'default'},
    {value: 'D8', row: 'D', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowE = [
    {value: 'E1', row: 'E', column: 1, target: true, clickType: 'default'},
    {value: 'E2', row: 'E', column: 2, target: false, clickType: 'default'},
    {value: 'E3', row: 'E', column: 3, target: true, clickType: 'default'},
    {value: 'E4', row: 'E', column: 4, target: true, clickType: 'default'},
    {value: 'E5', row: 'E', column: 5, target: true, clickType: 'default'},
    {value: 'E6', row: 'E', column: 6, target: false, clickType: 'default'},
    {value: 'E7', row: 'E', column: 7, target: true, clickType: 'default'},
    {value: 'E8', row: 'E', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowF = [
    {value: 'F1', row: 'F', column: 1, target: true, clickType: 'default'},
    {value: 'F2', row: 'F', column: 2, target: false, clickType: 'default'},
    {value: 'F3', row: 'F', column: 3, target: true, clickType: 'default'},
    {value: 'F4', row: 'F', column: 4, target: true, clickType: 'default'},
    {value: 'F5', row: 'F', column: 5, target: true, clickType: 'default'},
    {value: 'F6', row: 'F', column: 6, target: false, clickType: 'default'},
    {value: 'F7', row: 'F', column: 7, target: true, clickType: 'default'},
    {value: 'F8', row: 'F', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowG = [
    {value: 'G1', row: 'G', column: 1, target: true, clickType: 'default'},
    {value: 'G2', row: 'G', column: 2, target: false, clickType: 'default'},
    {value: 'G3', row: 'G', column: 3, target: true, clickType: 'default'},
    {value: 'G4', row: 'G', column: 4, target: true, clickType: 'default'},
    {value: 'G5', row: 'G', column: 5, target: true, clickType: 'default'},
    {value: 'G6', row: 'G', column: 6, target: false, clickType: 'default'},
    {value: 'G7', row: 'G', column: 7, target: true, clickType: 'default'},
    {value: 'G8', row: 'G', column: 8, target: false, clickType: 'default'},
  ];

  const puzzleRowH = [
    {value: 'H1', row: 'H', column: 1, target: true, clickType: 'default'},
    {value: 'H2', row: 'H', column: 2, target: false, clickType: 'default'},
    {value: 'H3', row: 'H', column: 3, target: true, clickType: 'default'},
    {value: 'H4', row: 'H', column: 4, target: true, clickType: 'default'},
    {value: 'H5', row: 'H', column: 5, target: true, clickType: 'default'},
    {value: 'H6', row: 'H', column: 6, target: false, clickType: 'default'},
    {value: 'H7', row: 'H', column: 7, target: true, clickType: 'default'},
    {value: 'H8', row: 'H', column: 8, target: false, clickType: 'default'},
  ];

  // const [isHit, setIsHit] = useState(hit);
  // const [isMiss, setIsMiss] = useState(miss);

  const [cellValue, setCellValue] = useState('');
  const [clickType, setClickType] = useState('default');
  console.log('clickType', clickType);

  const targets = ['all targs'];
  /* If targets, then win */

  const setChooseCell = (cellVal: string, cellType: string) => {
    const cell = puzzle.find(cell => cell.value === cellVal) ?? {
      value: '',
      row: '',
      target: null,
      clickType: '',
    };
    cell.clickType = cellType;
  };

  const getClickValue = (cellValue: string, clickType: string) => {
    console.log('clicked:', cellValue, clickType);
    setChooseCell(cellValue, clickType);
    setCellValue(cellValue);
    setClickType(clickType);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* {puzzle.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, columnIndex) => (
                        <TextInput key={columnIndex}
                                   style={[ styles.cell,
                                            (rowIndex + columnIndex) % 2 === 0 ? 
                                            styles.lightBackground : styles.darkBackground,]}
                                   value={cell !== 0 ? String(cell) : ''}
                                   onChangeText={(value) => 
                                        handleCellChange(value, rowIndex, columnIndex)}
                                   keyboardType="numeric"
                                   maxLength={1}
                                   onFocus={() => clearCell(rowIndex, columnIndex)}/>))}
                </View>
            ))} */}
          <View style={styles.flexrow_container}>
            {puzzleRowA.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowB.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowC.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowD.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowE.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowF.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowG.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
          </View>

          <View style={styles.flexrow_container}>
            {puzzleRowH.map((cell, key) => (
              <Cell
                key={key}
                cellValue={cell.value}
                target={cell.target}
                clickType={clickType}
                valueCallback={getClickValue}
              />
            ))}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top_container: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'red',
  },
  flexrow_container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  cell: {
    backgroundColor: '#ebedf0',
    height: 20,
    width: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

{
  /* <View style={styles.flexrow_container}>
            <Cell target={true} clickType="default" />
            <Cell target={false} clickType="default" />
            <Cell target={true} clickType="default" />
            <Cell target={true} clickType="default" />
            <Cell target={true} clickType="default" />
            <Cell target={false} clickType="default" />
            <Cell target={true} clickType="default" />
            <Cell target={false} clickType="default" />
          </View> */
}
