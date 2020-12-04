import React, {Component} from 'react';
import styled from 'styled-components'


const Wrapper = styled.header`
  background-color: #E5FAE1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 25px;

`
const Button = styled.button`
  background-color: #E5FAE1;
  font-family: "Segoe UI", sans-serif;
  text-transform: uppercase;
  padding: 10px;
  border: none;

  
  &:hover{
    color: #cd99f5;
    cursor: pointer;
  }
`



class SearchBar extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        return(
            <Wrapper>
                <div>
                    <Button>shop all</Button>
                    <Button>coffee</Button>
                    <Button>brewing</Button>
                    <Button>gift cards</Button>
                    <Button>more</Button>
                </div>
                <div>
                    <input placeholder={'Search Store'} />
                </div>
            </Wrapper>
        )
    }


}

export default SearchBar