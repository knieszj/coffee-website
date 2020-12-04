import React, {Component} from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 17%;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: baseline;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  border-bottom-color: black;
  border-bottom-width: 3px;

`
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

const Div = styled.div`
  font-size: small;
  font-weight: lighter;
  text-transform: capitalize;
`

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Div>filters</Div>
                <Button>coffee type</Button>
                <Button>region</Button>
                <Button>processing</Button>
            </Wrapper>
        )
    }

}

export default Filter