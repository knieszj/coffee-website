import React, {Component} from 'react'

class CoffeeCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img/>
                <div>
                    title
                </div>
                <div>
                    accent text
                </div>
                <div>
                    weight & price
                </div>
            </div>
        )
    }
}

export default CoffeeCards;