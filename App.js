import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Delete Task", "Do you want to delete this task?", [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed"),
      // },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>TO DO LIST</Text>
        <ScrollView>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
