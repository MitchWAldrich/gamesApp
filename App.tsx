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

  // const puzzle = {
  //   A: {
  //     A1: {target: true, miss: false, hit: false},
  //     A2: {target: false, miss: false, hit: false},
  //     A3: {target: true, miss: false, hit: false},
  //     A4: {target: true, miss: false, hit: false},
  //     A5: {target: true, miss: false, hit: false},
  //     A6: {target: false, miss: false, hit: false},
  //     A7: {target: true, miss: false, hit: false},
  //     A8: {target: false, miss: false, hit: false},
  //   },
  //   B: {
  //     B1: {target: true, miss: false, hit: false},
  //     B2: {target: false, miss: false, hit: false},
  //     B3: {target: false, miss: false, hit: false},
  //     B4: {target: false, miss: false, hit: false},
  //     B5: {target: false, miss: false, hit: false},
  //     B6: {target: false, miss: false, hit: false},
  //     B7: {target: true, miss: false, hit: false},
  //     B8: {target: false, miss: false, hit: false},
  //   },
  //   C: {
  //     C1: {target: false, miss: false, hit: false},
  //     C2: {target: false, miss: false, hit: false},
  //     C3: {target: false, miss: false, hit: false},
  //     C4: {target: false, miss: false, hit: false},
  //     C5: {target: false, miss: false, hit: false},
  //     C6: {target: false, miss: false, hit: false},
  //     C7: {target: true, miss: false, hit: false},
  //     C8: {target: false, miss: false, hit: false},
  //   },
  //   D: {
  //     D1: {target: true, miss: false, hit: false},
  //     D2: {target: true, miss: false, hit: false},
  //     D3: {target: true, miss: false, hit: false},
  //     D4: {target: true, miss: false, hit: false},
  //     D5: {target: false, miss: false, hit: false},
  //     D6: {target: false, miss: false, hit: false},
  //     D7: {target: false, miss: false, hit: false},
  //     D8: {target: false, miss: false, hit: false},
  //   },
  //   E: {
  //     E1: {target: false, miss: false, hit: false},
  //     E2: {target: false, miss: false, hit: false},
  //     E3: {target: false, miss: false, hit: false},
  //     E4: {target: false, miss: false, hit: false},
  //     E5: {target: false, miss: false, hit: false},
  //     E6: {target: false, miss: false, hit: false},
  //     E7: {target: true, miss: false, hit: false},
  //     E8: {target: false, miss: false, hit: false},
  //   },
  //   F: {
  //     F1: {target: false, miss: false, hit: false},
  //     F2: {target: false, miss: false, hit: false},
  //     F3: {target: false, miss: false, hit: false},
  //     F4: {target: true, miss: false, hit: false},
  //     F5: {target: true, miss: false, hit: false},
  //     F6: {target: false, miss: false, hit: false},
  //     F7: {target: true, miss: false, hit: false},
  //     F8: {target: false, miss: false, hit: false},
  //   },
  //   G: {
  //     G1: {target: false, miss: false, hit: false},
  //     G2: {target: true, miss: false, hit: false},
  //     G3: {target: false, miss: false, hit: false},
  //     G4: {target: false, miss: false, hit: false},
  //     G5: {target: false, miss: false, hit: false},
  //     G6: {target: false, miss: false, hit: false},
  //     G7: {target: true, miss: false, hit: false},
  //     G8: {target: false, miss: false, hit: false},
  //   },
  //   H: {
  //     H1: {target: false, miss: false, hit: false},
  //     H2: {target: true, miss: false, hit: false},
  //     H3: {target: false, miss: false, hit: false},
  //     H4: {target: false, miss: false, hit: false},
  //     H5: {target: false, miss: false, hit: false},
  //     H6: {target: false, miss: false, hit: false},
  //     H7: {target: true, miss: false, hit: false},
  //     H8: {target: false, miss: false, hit: false},
  //   },
  // };

  const puzzle = {
    A: {
      A1: {target: true},
      A2: {target: false},
      A3: {target: true},
      A4: {target: true},
      A5: {target: true},
      A6: {target: false},
      A7: {target: true},
      A8: {target: false},
    },
    B: {
      B1: {target: true},
      B2: {target: false},
      B3: {target: false},
      B4: {target: false},
      B5: {target: false},
      B6: {target: false},
      B7: {target: true},
      B8: {target: false},
    },
    C: {
      C1: {target: false},
      C2: {target: false},
      C3: {target: false},
      C4: {target: false},
      C5: {target: false},
      C6: {target: false},
      C7: {target: true},
      C8: {target: false},
    },
    D: {
      D1: {target: true},
      D2: {target: true},
      D3: {target: true},
      D4: {target: true},
      D5: {target: false},
      D6: {target: false},
      D7: {target: false},
      D8: {target: false},
    },
    E: {
      E1: {target: false},
      E2: {target: false},
      E3: {target: false},
      E4: {target: false},
      E5: {target: false},
      E6: {target: false},
      E7: {target: true},
      E8: {target: false},
    },
    F: {
      F1: {target: false},
      F2: {target: false},
      F3: {target: false},
      F4: {target: true},
      F5: {target: true},
      F6: {target: false},
      F7: {target: true},
      F8: {target: false},
    },
    G: {
      G1: {target: false},
      G2: {target: true},
      G3: {target: false},
      G4: {target: false},
      G5: {target: false},
      G6: {target: false},
      G7: {target: true},
      G8: {target: false},
    },
    H: {
      H1: {target: false},
      H2: {target: true},
      H3: {target: false},
      H4: {target: false},
      H5: {target: false},
      H6: {target: false},
      H7: {target: true},
      H8: {target: false},
    },
  };

  // const [isHit, setIsHit] = useState(hit);
  // const [isMiss, setIsMiss] = useState(miss);

  const [clickType, setClickType] = useState('default');

  const getClickValue = (value: string) => {
    setClickType(value);
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
            <Cell
              cellValue={puzzle.A.A1.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A2.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A3.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A4.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A5.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A6.target}
              target={false}
              clickType="miss"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.A.A8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.B.B1.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B2.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B3.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B4.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B5.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.B.B8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.C.C1.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C2.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C3.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C4.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C5.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.C.C8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.D.D1.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D2.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D3.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D4.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D5.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D7.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.D.D8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.E.E1.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E2.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E3.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E4.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E5.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.E.E8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.F.F1.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F2.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F3.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F4.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F5.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.F.F8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.G.G1.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G2.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G3.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G4.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G5.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.G.G8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>

          <View style={styles.flexrow_container}>
            <Cell
              cellValue={puzzle.H.H1.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H2.target}
              target={false}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H3.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H4.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H5.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H6.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H7.target}
              target={true}
              clickType="hit"
              valueCallback={getClickValue}
            />
            <Cell
              cellValue={puzzle.H.H8.target}
              target={false}
              clickType="default"
              valueCallback={getClickValue}
            />
          </View>
          <View>
            <Button title="Hit"></Button>
            <Button title="Miss"></Button>
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
