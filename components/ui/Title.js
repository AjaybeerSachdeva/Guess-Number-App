import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
