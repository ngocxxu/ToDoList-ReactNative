import { StyleSheet } from "react-native";
import color from './../../contains/color'

const style = StyleSheet.create({
  addTask: {
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  iconWrapper: {
    width: 44,
    height: 44,
    backgroundColor: color.primary,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: color.white,
    fontSize: 26,
    fontWeight: 'bold',
  }
})

export default style;