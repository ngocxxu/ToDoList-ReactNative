import { StyleSheet } from "react-native";
import color from './../../contains/color'

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: color.white,
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    backgroundColor: color.second,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: color.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    width: "80%",
    fontSize: 16,
  },
})

export default styles;