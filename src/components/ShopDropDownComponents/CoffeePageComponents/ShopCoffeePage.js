import {Component} from "react/cjs/react.production.min";
import SearchBar from "../../SearchBar";
import Filter from "../../Filters";
import CoffeeWrapper from "./CoffeeWrapper";
import SupportLocalFarmers from "../../SupportLocalFarmers";
import CoffeeQuiz from "../../CoffeeQuiz";
import FooterAndMore from "../../FooterAndMore";


class ShopCoffeePage extends Component{
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <SearchBar/>
                <Filter/>
                <CoffeeWrapper/>
                <SupportLocalFarmers/>
                <CoffeeQuiz/>
                <FooterAndMore/>
            </div>
        );
    }

}

export default ShopCoffeePage