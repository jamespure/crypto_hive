import { Route, Routes } from "react-router-dom";
import CoinsContextProvider from "../contexts/coinsContext";
import SearchContextProvider from "../contexts/searchContext";
import TrendingContextProvider from "../contexts/trendingContextProvider";
import Home from "../pages/homePage";
import Header from "./Header/Header";
import CoinPage from '../pages/coinPage';

function App() {
  return (
    <CoinsContextProvider>
      <TrendingContextProvider>
        <SearchContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path={`/coin/:id`} element={<CoinPage/>} />
          </Routes>
        </SearchContextProvider>
      </TrendingContextProvider>
    </CoinsContextProvider>
  );
}

export default App;
