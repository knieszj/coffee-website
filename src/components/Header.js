import React, {Component} from 'react';
import styled from 'styled-components'
import americanFlagIcon from '../imagesAndIcons/Wikipedia-Flags-US-United-States-Flag.svg'
import coffeeCupIcon from '../imagesAndIcons/svgIncons/128px-Coffee-2346113.svg.png'
import DropdownMenu from "./ShopDropDownMenu/DropdownMenu";

const SaleBanner = styled.div`
  background-color: #cd99f5;
  width: 100%;
  height: 25px;
  color: white;
  font-family: "Segoe UI", sans-serif;
  font-size: small;
  padding-top: 5px;
  vertical-align: center;
`
const Anchor = styled.a`
  text-decoration: none;
`

const Wrapper = styled.header`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;
`
const Button = styled.button`
  background-color: white;
  font-family: "Segoe UI", sans-serif;
  text-transform: uppercase;
  padding: 10px;
  border: none;
  margin-left: 20px;

  
  &:hover{
    color: #cd99f5;
    cursor: pointer;
  }
`
const SubscribeButton = styled(Button)`
color: #cd99f5
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    
`

const youTubeLink = `https://www.youtube.com/watch?v=oHg5SJYRHA0`



class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SaleBanner>
                    Our Winter Blooms holiday collection is here. <span> <Anchor href={youTubeLink}> Shop Now</Anchor></span>
                </SaleBanner>
                <Wrapper>
                    <Div>
                        <img src={coffeeCupIcon} height={25}/>
                        <DropdownMenu buttonName={'SHOP'} styling={Button}/>
                        <Button>subscriptions</Button>
                        <Button>holiday</Button>
                        <Button>locations</Button>
                        <Button>learn</Button>
                    </Div>
                    <div>
                        <SubscribeButton>subscribe</SubscribeButton>
                        <Button>sign in</Button>
                        <Button>shopping cart</Button>
                        <img src={americanFlagIcon} width={27}/>
                    </div>
                </Wrapper>
            </>
        )
    }

}

export default Header;