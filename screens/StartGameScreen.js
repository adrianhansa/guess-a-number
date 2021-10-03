import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Select a Number</Text>
        <Input style={styles.input} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Reset" style={styles.button} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Confirm" style={styles.button} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  title: { fontSize: 20, marginVertical: 10 },
  inputContainer: { borderRadius: 20, shadowColor: "blue" },
  input: { width: "80%", textAlign: "center" },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {},
  buttonWrapper: {
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1,
    width: 100,
    marginVertical: 10,
    backgroundColor: "lightblue",
  },
});

export default StartGameScreen;
