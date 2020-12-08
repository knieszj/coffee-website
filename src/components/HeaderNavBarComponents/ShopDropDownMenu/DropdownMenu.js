import React from 'react';
import {Component} from "react/cjs/react.production.min";
import './dropDownMenu.css'


class DropdownMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            menuToggle: false,
        }
    }


    render() {
        return (
            <nav className="navigationBar">
                <ul>
                    {this.props.buttonName}
                </ul>
                <div className="subMenu" >
                    <li className="listItem">coffee subscriptions</li>
                    <div className="hrDiv">
                        <hr className="horizontalRule"/>
                    </div>
                    <li className="listItem" >coffee</li>
                    <li className="listItem" >holiday</li>
                    <li className="listItem" >brew tools</li>
                    <li className="listItem" >ceramics & mugs</li>
                    <li className="listItem" >blue bottle collectibles</li>
                    <li className="listItem" >coffee finder</li>
                    <div className="hrDiv">
                        <hr className="horizontalRule"/>
                    </div>
                    <li className="listItem" >gift subscriptions</li>
                    <li className="listItem" >gift cards</li>
                    <li className="listItem" >corporate gift program</li>


                </div>
            </nav>
        );
    }

}

export default DropdownMenu

//coffee subscriptions
//hr
//coffee
//holiday
//brew tools
//cceramics & mugs
//blue bottle collecibles
//coffee finder
//hr
//gift subscriptions
//gift cards
//corporate gift program