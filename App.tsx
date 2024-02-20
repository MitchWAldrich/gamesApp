import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Board from './src/components/Board';
import Board2 from './src/components/Board2';
import Board3 from './src/components/Board3';

import {B1game1} from './src/puzzles/board1/game1';
import {B2game1} from './src/puzzles/board2/game1';
import {B3game1} from './src/puzzles/board3/game1';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const [puzzle, setPuzzle] = useState();

  const validateGame = (targetArrays: number[][]) => {
    targets.length === 7;
  };

  const targets: number[][] = [
    [1, 9],
    [44, 45],
    [50, 58],
    [3, 4, 5],
    [7, 15, 23],
    [25, 26, 27, 28],
    [39, 47, 55, 63],
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <Board puzzle={B1game1} /> */}
          {/* <Board2 puzzle={B2game1} /> */}
          <Board3 puzzle={B3game1} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
