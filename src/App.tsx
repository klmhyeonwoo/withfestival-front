import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import Header from "./components/common/Header";
import Banner from "./components/common/Banner";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail/Detail";
import FestivalPage from "./pages/FestivalPage";
import FleamarketPage from "./pages/FleamarketPage";
import FoodtruckPage from "./pages/FoodtruckPage";
import FestivalVideoPage from "./pages/FestivalVideoPage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<Header />}>
            <Route element={<Banner />}></Route>
            <Route path="/" element={<Index />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/festivalInfo" element={<FestivalPage />}></Route>
            <Route path="/fleamarket" element={<FleamarketPage />}></Route>
            <Route path="/foodtruck" element={<FoodtruckPage />}></Route>
            <Route path="/video" element={<FestivalVideoPage />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
