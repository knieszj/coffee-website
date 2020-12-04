import React, {Component} from 'react'




class AccentText extends Component {
    constructor(props) {
        super(props);

        this.state ={

            accentText: [
                'Papaya, Jasmine, Yuzu',
                'Our limited-edition offering just for the season',
                'Ethiopia Gedeb METAD Chelbesa Natural with notes of Blueberry, Jasmine, Yuzu',
                'For a sweet start to the day',
                'Floral & inspiring, with notes of milk chocolate, black cherry, and nutmeg',
                'A pair of coffees just for the season',
                'lavender, grapefruit, honey',
                'Grapefruit, Blackberry, Honey',
            ],

        }
    }

    render() {
        return (
            <>

                {this.state.accentText.map(accentText => <div>{accentText}</div>)}

            </>
        )
    }
}

export default AccentText;