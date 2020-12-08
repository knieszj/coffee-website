import React from 'react';
import styled from 'styled-components';
import CoffeeCards from "./CoffeeCards";
import {Component} from "react/cjs/react.production.min";
import product1 from '../../../imagesAndIcons/productImages/a9coibyws1aj2lrjnpmb.jpg'
import product2 from '../../../imagesAndIcons/productImages/b1kauy7eszfugnbxg3do.jpg'
import product3 from '../../../imagesAndIcons/productImages/bbbctsi1mlpdqmcudsko.jpg'
import product4 from '../../../imagesAndIcons/productImages/dhctmchpaf6eulkygjue.jpg'
import product5 from '../../../imagesAndIcons/productImages/e7wlxvaqj9p3jb52zuco.jpg'
import product6 from '../../../imagesAndIcons/productImages/eogyc9spkbgqkmsnrwwg.jpg'
import product7 from '../../../imagesAndIcons/productImages/f0zsmfnoxhfthqssuvzg.jpg'
import product8 from '../../../imagesAndIcons/productImages/f5zzuh2xchsc7xn3mqbk.jpg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 17%;
  margin-right: 17%;
`

class CoffeeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    image: product1,
                    title: 'Panama Finca Santa Teresa Zorro Gesha Natural',
                    accentText: 'Papaya, Jasmine, Yuzu',
                    weight: '100gr | ',
                    price: '$40',
                },
                {
                    id: 2,
                    image: product2,
                    title: 'Blue Bottle Coffee Exceedingly Rare Gift Subscription',
                    accentText: 'Our limited-edition offering just for the season',
                    weight: '',
                    price: '$200',
                },
                {
                    id: 3,
                    image: product3,
                    title: 'Winter Blooms Single Origin',
                    accentText: 'Ethiopia Gedeb METAD Chelbesa Natural with notes of Blueberry, Jasmine, Yuzu',
                    weight: '6oz | ',
                    price: '$13',
                },
                {
                    id: 4,
                    image: product4,
                    title: 'Beautiful Mornings Set with Coffee Blossom Honey',
                    accentText: 'For a sweet start to the day',
                    weight: '',
                    price: '$30',
                },
                {
                    id: 5,
                    image: product5,
                    title: 'Winter Blooms Blend',
                    accentText: 'Floral & inspiring, with notes of milk chocolate',
                    weight: '6oz | ',
                    price: '$12',
                },
                {
                    id: 6,
                    image: product6,
                    title: 'Winter Blooms Coffee Set',
                    accentText: 'A pair of coffees just for the season',
                    weight: '',
                    price: '$25',
                },
                {
                    id: 7,
                    image: product7,
                    title: 'Kenya Kiambu Handege',
                    accentText: 'lavender, grapefruit, honey',
                    weight: '6oz | ',
                    price: '$13',
                },
                {
                    id: 8,
                    image: product8,
                    title: 'Kenya Kirinyaga Kaguyu',
                    accentText: 'Grapefruit, Blackberry, Honey',
                    weight: '6oz | ',
                    price: '$13.50',
                },
            ]
        }
    }

    render() {
        return (
            <Wrapper>
                <CoffeeCards cards={this.state.cards}/>
            </Wrapper>
        )

    }
}

export default CoffeeWrapper