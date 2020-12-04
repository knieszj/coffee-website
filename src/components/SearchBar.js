import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        return(
            <section>
                <div>
                    <button>shop all</button>
                    <button>coffee</button>
                    <button>brewing</button>
                    <button>gift cards</button>
                    <button>more</button>
                </div>
                <div>
                    <input/>
                </div>
            </section>
        )
    }


}

export default SearchBar