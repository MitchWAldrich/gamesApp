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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button_row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  number_buttons: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
  },
  number_buttons2: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
  },
  number_buttons0: {
    height: 50,
    width: 50,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 10,
  },
  draft_button: {
    height: 50,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 5,
  },
  final_button: {
    height: 50,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 10,
  },
  button_text: {
    fontSize: 16,
  },
  draft_text: {
    color: 'blue',
    fontSize: 18,
  },
  final_text: {
    color: 'green',
    fontSize: 18,
  },
});
