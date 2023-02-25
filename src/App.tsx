import React from "react";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import { ImagesProvider } from "./contexts/ImagesContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useThemeMode } from "./contexts/ThemeModeContext";
import { MobileProvider } from "./contexts/MobileContext";

function App() {
  const { theme } = useThemeMode()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MobileProvider>
        <ImagesProvider>
          <div className="App">
            <ToastContainer />
            <Header />
            <Home />
          </div>
        </ImagesProvider>
      </MobileProvider>
    </ThemeProvider>
  );
}

export default App;
