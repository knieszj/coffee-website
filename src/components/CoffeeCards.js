import React, {Component} from 'react'


import CoffeeCardImages from "./coffeeCard/CoffeeCardImages";
import CoffeeCardTitles from "./coffeeCard/CoffeeCardTitles";
import AccentText from "./coffeeCard/AccentText";
import WeightAndPrice from "./coffeeCard/WeightAndPrice";

class CoffeeCards extends Component {
    constructor(props) {
        super(props);

        this.state ={
        }
    }

    render() {
        return (
            <div>
                <CoffeeCardImages/>
                <CoffeeCardTitles/>
                <AccentText/>
                <WeightAndPrice/>
            </div>
        )
    }
}

export default CoffeeCards;