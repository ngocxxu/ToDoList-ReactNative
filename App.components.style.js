import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: color.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
