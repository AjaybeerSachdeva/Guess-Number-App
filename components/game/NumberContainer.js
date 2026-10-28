import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    borderColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellow,
    fontSize: 36,
    fontWeight: "bold",
  },
});
