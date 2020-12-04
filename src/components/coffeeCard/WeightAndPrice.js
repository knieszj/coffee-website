import React, {Component} from 'react'


class WeightAndPrice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weightAndPrice: [
                '100gr | $40',
                '$200',
                '6oz | $13',
                '$30',
                '6oz | $12',
                '$25',
                '6oz | $13',
                '6oz | $13.50',
            ],
        }
    }

    render() {
        return (
            <>

                {this.state.weightAndPrice.map(weightAndPrice => <div>{weightAndPrice}</div>)}

            </>
        )
    }
}

export default WeightAndPrice;