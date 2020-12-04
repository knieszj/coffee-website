import React, {Component} from 'react'
import product1 from '../imagesAndIcons/productImages/a9coibyws1aj2lrjnpmb.jpg'
import product2 from '../imagesAndIcons/productImages/b1kauy7eszfugnbxg3do.jpg'
import product3 from '../imagesAndIcons/productImages/bbbctsi1mlpdqmcudsko.jpg'
import product4 from '../imagesAndIcons/productImages/dhctmchpaf6eulkygjue.jpg'
import product5 from '../imagesAndIcons/productImages/e7wlxvaqj9p3jb52zuco.jpg'
import product6 from '../imagesAndIcons/productImages/eogyc9spkbgqkmsnrwwg.jpg'
import product7 from '../imagesAndIcons/productImages/f0zsmfnoxhfthqssuvzg.jpg'
import product8 from '../imagesAndIcons/productImages/f5zzuh2xchsc7xn3mqbk.jpg'


import CoffeeCardImages from "./coffeeCard/CoffeeCardImages";
import CoffeeCardTitles from "./coffeeCard/CoffeeCardTitles";
import AccentText from "./coffeeCard/AccentText";
import WeightAndPrice from "./coffeeCard/WeightAndPrice";


class CoffeeCards extends Component {
    constructor(props) {
        super(props);

        this.state ={
            card: [
                {
                    image: product1,
                    title: 'Panama Finca Santa Teresa Zorro Gesha Natural',
                    accentText: 'Papaya, Jasmine, Yuzu',
                    weightAndPrice: '100gr | $40',
                },
                {
                    image: product2,
                    title: 'Blue Bottle Coffee Exceedingly Rare Gift Subscription',
                    accentText: 'Our limited-edition offering just for the season',
                    weightAndPrice: '$200',
                },
                {
                    image: product3,
                    title: 'Winter Blooms Single Origin',
                    accentText: 'Ethiopia Gedeb METAD Chelbesa Natural with notes of Blueberry, Jasmine, Yuzu',
                    weightAndPrice: '6oz | $13',
                },
                {
                    image: product4,
                    title: 'Beautiful Mornings Set with Coffee Blossom Honey',
                    accentText: 'For a sweet start to the day',
                    weightAndPrice: '$30',
                },
                {
                    image: product5,
                    title: 'Winter Blooms Blend',
                    accentText: 'Floral & inspiring, with notes of milk chocolate',
                    weightAndPrice: '6oz | $12',
                },
                {
                    image: product6,
                    title: 'Winter Blooms Coffee Set',
                    accentText: 'A pair of coffees just for the season',
                    weightAndPrice: '$25',
                },
                {
                    image: product7,
                    title: 'Kenya Kiambu Handege',
                    accentText: 'lavender, grapefruit, honey',
                    weightAndPrice: '6oz | $13',
                },
                {
                    image: product8,
                    title: 'Kenya Kirinyaga Kaguyu',
                    accentText: 'Grapefruit, Blackberry, Honey',
                    weightAndPrice: '6oz | $13.50',
                },
            ]
        }
    }

    //test//

    render() {
        return (
            <div>
                {this.state.card.map(card =>{
                    return (
                    <>
                        <img src={card.image}/>
                        <div>{card.title}</div>
                        <div>{card.accentText}</div>
                        <div>{card.weightAndPrice}</div>
                  </>
                )
                })}

                {/*<CoffeeCardImages/>*/}
                {/*<CoffeeCardTitles/>*/}
                {/*<AccentText/>*/}
                {/*<WeightAndPrice/>*/}
            </div>
        )
    }
}

export default CoffeeCards;