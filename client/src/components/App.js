import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import CoinsContextProvider from "../contexts/coinsContext";
import SearchContextProvider from "../contexts/searchContext";
import TrendingContextProvider from "../contexts/trendingContextProvider";
import Home from "../pages/homePage";
import Header from "./Header/Header";
import CoinPage from "../pages/coinPage";
import { ThemeProvider, createTheme } from "@material-ui/core";
import useTitle from "../hooks/useTitle";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#a9a9a9",
    },
    type: "dark",
  },
  typography: {
    fontFamily: ["Mukta, sans-serif"],
  },
});

function App() {
  const [title, setTitle] = useState('')
  const path = useLocation()
  const pageTitle = path.pathname.toString().split("/coin/")[1];

  const handleTitle = useCallback(() => { 
    if (pageTitle == null) {
      return setTitle("Home".toUpperCase());
      
    } else {
      return setTitle(pageTitle.toUpperCase());
    }
  }, [pageTitle, setTitle])

  useEffect(() => {
    handleTitle();
  },[handleTitle])
  
  console.log(title)
  
  
  useTitle(title);
  return (
    <ThemeProvider theme={theme}>
      <CoinsContextProvider>
        <TrendingContextProvider>
          <SearchContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path={`/coin/:id`} element={<CoinPage />} />
            </Routes>
          </SearchContextProvider>
        </TrendingContextProvider>
      </CoinsContextProvider>
    </ThemeProvider>
  );
}

export default App;
