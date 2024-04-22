import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  top_container: {
    backgroundColor: 'red',
  },
  flexrow_container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    height: 38,
    width: 38,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inner_cell: {
    display: 'flex',
    flexDirection: 'row',
    height: 10,
    width: 10,
    justifyContent: 'center',
  },
  inner_cell_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  inner_cell_row: {
    display: 'flex',
    flexDirection: 'row',
  },
  miss: {
    backgroundColor: 'green',
    height: 34,
    width: 34,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 15},
});
