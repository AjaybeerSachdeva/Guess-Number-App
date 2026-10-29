import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../../constants/colors";

export default function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();

  let numberFontSize = width > height ? 28 : 36;
  return (
    <View style={styles.container}>
      <Text style={[styles.numberText, { fontSize: numberFontSize }]}>
        {children}
      </Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    borderColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellow,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: "bold",
  },
});
