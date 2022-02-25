import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";

const Form = () => {
  return (
    <View style={styles.addTask}>
      <TextInput style={styles.input} />
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>+</Text>
      </View>
    </View>
  );
};

export default Form;
