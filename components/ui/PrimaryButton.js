import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function PrimaryButton({ children, pressHandler }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    elevation: 2,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans",
  },
  pressed: {
    opacity: 0.75,
  },
});
