import React from 'react';
import {Component} from "react/cjs/react.production.min";
import styled from 'styled-components'



const Button = styled.button`
  background-color: white;
  font-family: "Segoe UI", sans-serif;
  text-transform: uppercase;
  padding: 10px;
  border: none;
  margin-left: 20px;

  &:hover {
    color: #cd99f5;
    cursor: pointer;
    
  }
`
const DropDownMenuElement = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  
  ${Button}hover &{
    display: none;
    background-color: green;
    
  }
`

class DropdownMenu extends Component {
    constructor(props) {
        super();
        this.state ={
            menuToggle: false,
        }
    }


    render() {
        return (
            <div>
                <Button>
                    {this.props.buttonName}
                </Button>
                <DropDownMenuElement>
                    <a>coffee subscriptions</a>
                    <hr/>
                    <a>coffee</a>
                    <a>holiday</a>
                    <a>brew tools</a>
                    <a>ceramics & mugs</a>
                    <a>blue bottle collectibles</a>
                    <a>coffee finder</a>
                    <hr/>
                    <a>gift subscriptions</a>
                    <a>gift cards</a>
                    <a>corporate gift program</a>
                </DropDownMenuElement>
            </div>
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