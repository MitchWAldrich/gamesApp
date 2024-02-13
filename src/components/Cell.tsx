import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';

export type CellProps = {
  cellValue: string;
  clickType: string;
  target: boolean;
  valueCallback: (cellValue: string, cellType: string) => void;
};

const Cell: React.FC<CellProps> = ({
  cellValue,
  clickType = 'default',
  target = false,
  valueCallback,
}) => {
  // const [isPressed, setIsPressed] = useState(false);

  // const hitOrMiss = (clickType: string) => {
  //   setIsPressed(true);
  // };

  return (
    <Pressable onPress={() => valueCallback(cellValue, clickType)}>
      {clickType === 'default' && <View style={styles.cell}></View>}
      {clickType === 'hit' && (
        <View style={styles.cell}>
          <FontAwesomeIcon icon={faCircle} />
        </View>
      )}
      {clickType === 'miss' && <View style={styles.miss}></View>}
    </Pressable>
  );
};

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
  miss: {
    backgroundColor: 'green',
    height: 20,
    width: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cell;
