import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [gameRounds, setGameRounds] = useState(0);

  const [fontsLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  function pickNumberHandler(enteredNumber) {
    setPickedNumber(enteredNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function restartGameHandler() {
    setPickedNumber(null);
    setGameRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (pickedNumber) {
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        onGameOver={gameOverHandler}
        setRoundCount={setGameRounds}
      />
    );
  }

  if (gameIsOver && pickedNumber) {
    screen = (
      <GameOverScreen
        userNumber={pickedNumber}
        roundsNumber={gameRounds}
        restartGameHandler={restartGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.yellow]}
        style={styles.rootContainer}
      >
        <ImageBackground
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}
          source={require("./assets/background (1).png")}
          resizeMode="cover"
        >
          <SafeAreaView
            style={styles.rootContainer}
            edges={["top", "left", "right", "bottom"]}
          >
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
