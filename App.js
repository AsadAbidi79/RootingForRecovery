import React, { useEffect } from "react";
import Routes from "./src/Navigation/Routes";
import Icons from "./src/Theme/Icons";
import SplashScreen from "react-native-splash-screen";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Routes />;
}

export default App;
