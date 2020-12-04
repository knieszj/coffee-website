import React, {Component} from 'react'




class CoffeeCardTitles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: [
                'Panama Finca Santa Teresa Zorro Gesha Natural',
                'Blue Bottle Coffee Exceedingly Rare Gift Subscription',
                'Winter Blooms Single Origin',
                'Beautiful Mornings Set with Coffee Blossom Honey',
                'Winter Blooms Blend',
                'Winter Blooms Coffee Set',
                'Kenya Kiambu Handege',
                'Kenya Kirinyaga Kaguyu',
            ],
        }
    }

    render() {
        return (
            <>
                {this.state.title.map(title => <div>{title}</div>)}

            </>
        )
    }
}

export default CoffeeCardTitles;