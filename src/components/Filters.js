import React, {Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section>
                <button>filters</button>
                <button>coffee type</button>
                <button>region</button>
                <button>processing</button>
            </section>
        )
    }

}

export default Filter