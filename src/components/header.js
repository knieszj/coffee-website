import React, {Component} from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div>
                    <img/>
                    <button>shop</button>
                    <button>subscriptions</button>
                    <button>holiday</button>
                    <button>locations</button>
                    <button>learn</button>
                </div>
                <div>
                    <button>subscribe</button>
                    <button>sign in</button>
                    <button>shopping cart</button>
                    <img/>
                </div>
            </header>
        )
    }

}

export default Header;