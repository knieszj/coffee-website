import React, {Component} from 'react';
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import americanFlagIcon from '../imagesAndIcons/Wikipedia-Flags-US-United-States-Flag.svg'
import coffeeCupIcon from '../imagesAndIcons/svgIncons/128px-Coffee-2346113.svg.png'
import DropdownMenu from "./HeaderNavBarComponents/ShopDropDownMenu/DropdownMenu";
import HomePage from "./HomePage";
import ShopCoffeePage from "./ShopDropDownComponents/CoffeePageComponents/ShopCoffeePage";
import Subscriptions from "./HeaderNavBarComponents/Subscriptions";
import Holiday from "./HeaderNavBarComponents/Holiday";
import Locations from "./HeaderNavBarComponents/Locations";
import Learn from "./HeaderNavBarComponents/Learn";

// import SearchBar from "./components/SearchBar";
// import Filter from "./components/Filters";
// import CoffeeCards from "./components/CoffeeCards";
// import SupportLocalFarmers from "./components/SupportLocalFarmers";
// import CoffeeQuiz from "./components/CoffeeQuiz";
// import FooterAndMore from "./components/FooterAndMore";
// import CoffeeWrapper from "./components/CoffeeWrapper";


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


  &:hover {
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


class HeaderNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Router>
                    <SaleBanner>
                        Our Winter Blooms holiday collection is here. <span> <Anchor
                        href={youTubeLink}> Shop Now</Anchor></span>
                    </SaleBanner>
                    <Wrapper>
                        <Div>
                            <Link exact to={'/'}>
                                <img src={coffeeCupIcon} height={25} alt={'Coffee Cup Logo'}/>
                            </Link>
                            <Link to={'/Coffee'}>
                                <DropdownMenu buttonName={'SHOP'} styling={Button}/>
                            </Link>
                            <Button>
                                <Link to={'/Subscriptions'}>
                                    subscriptions
                                </Link>
                            </Button>
                            <Button>
                                <Link to={'/Holiday'}>
                                    holiday
                                </Link>
                            </Button>

                            <Button>
                                <Link to={'/Locations'}>
                                    locations
                                </Link>
                            </Button>
                            <Button>
                                <Link to={'/Learn'}>
                                    learn
                                </Link>
                            </Button>
                        </Div>
                        <div>
                            <SubscribeButton>subscribe</SubscribeButton>
                            <Button>sign in</Button>
                            <Button>shopping cart</Button>
                            <img src={americanFlagIcon} width={27}/>
                        </div>
                    </Wrapper>

                    <Switch>
                        <Route exact path={'/'}>
                            <HomePage/>
                        </Route>
                        <Route path={'/Coffee'}>
                            <ShopCoffeePage/>
                        </Route>
                        <Route path={'/Subscriptions'}>
                            <Subscriptions/>
                        </Route>
                        <Route path={'/Holiday'}>
                            <Holiday/>
                        </Route>
                        <Route path={'/Locations'}>
                            <Locations/>
                        </Route>
                        <Route path={'/Learn'}>
                            <Learn/>
                        </Route>
                    </Switch>

                </Router>

            </>
        )
    }

}

export default HeaderNavBar;