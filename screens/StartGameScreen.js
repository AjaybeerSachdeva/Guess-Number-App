import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [number, setNumber] = useState();

  function handleChange(enteredNumber) {
    setNumber(enteredNumber);
  }

  function resetButtonHandler() {
    setNumber("");
  }

  function confirmButtonHandler() {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert(
        "Invalid Number!",
        "Please choose a number greater than 0 and less than 100",
        [{ text: "Okay", style: "default", onPress: resetButtonHandler }],
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess the Number</Title>
      <Card>
        <InstructionText style={styles.instructionText}>
          Enter a Number
        </InstructionText>
        <TextInput
          value={number}
          onChangeText={handleChange}
          keyboardType="number-pad"
          style={styles.numberInput}
          maxLength={2}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={resetButtonHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={confirmButtonHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: "auto",
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
