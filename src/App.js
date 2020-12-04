import './App.css';
import './components/Header';
import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filters";
import CoffeeCards from "./components/CoffeeCards";
import SupportLocalFarmers from "./components/SupportLocalFarmers";
import CoffeeQuiz from "./components/CoffeeQuiz";
import FooterAndMore from "./components/FooterAndMore";

function App() {
    return (
        <div className="App">
            <Header/>
            <SearchBar/>
            <Filter/>
            <CoffeeCards/>
            <SupportLocalFarmers/>
            <CoffeeQuiz/>
            <FooterAndMore/>
        </div>
    );
}

export default App;
