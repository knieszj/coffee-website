import React, {Component} from 'react'
import product1 from '../../imagesAndIcons/productImages/a9coibyws1aj2lrjnpmb.jpg'
import product2 from '../../imagesAndIcons/productImages/b1kauy7eszfugnbxg3do.jpg'
import product3 from '../../imagesAndIcons/productImages/bbbctsi1mlpdqmcudsko.jpg'
import product4 from '../../imagesAndIcons/productImages/dhctmchpaf6eulkygjue.jpg'
import product5 from '../../imagesAndIcons/productImages/e7wlxvaqj9p3jb52zuco.jpg'
import product6 from '../../imagesAndIcons/productImages/eogyc9spkbgqkmsnrwwg.jpg'
import product7 from '../../imagesAndIcons/productImages/f0zsmfnoxhfthqssuvzg.jpg'
import product8 from '../../imagesAndIcons/productImages/f5zzuh2xchsc7xn3mqbk.jpg'


class CoffeeCardImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [product1, product2, product3, product4, product5, product6, product7, product8],

        }
    }

    render() {
        return (
            <>
                {this.state.images.map(images => <img src={images}/>)}
            </>
        )
    }
}

export default CoffeeCardImages;