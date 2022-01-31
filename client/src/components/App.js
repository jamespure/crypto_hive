import { Route, Routes } from "react-router-dom";
import CoinsContextProvider from "../contexts/coinsContext";
import SearchContextProvider from "../contexts/searchContext";
import Home from "../pages/homePage";

function App() {
  return (
    <CoinsContextProvider>
      <SearchContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SearchContextProvider>
    </CoinsContextProvider>
  );
}

export default App;
