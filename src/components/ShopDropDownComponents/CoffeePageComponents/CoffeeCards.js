import React, {Component} from 'react'
import {Switch, Link, Route, useRouteMatch, BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components'
import IndividualItem from "../../IndividualItem";


const Div = styled.div`
  background-color: white;
  width: 300px;
  margin-bottom: 20px;
  margin-right: 20px;
  box-shadow: 0 8px 7px -7px #cc98f5;

`
const Img = styled.img`
  width: 100%;
`
const CardTitle = styled.div`
  text-transform: capitalize;
  font-family: "Segoe UI", sans-serif;
  padding: 10px;

  &:hover {
    color: #cc98f5;
    cursor: pointer;
  }
`
const CardAccentText = styled(CardTitle)`
  font-style: italic;
  font-size: small;

  &:hover {
    color: black;
    cursor: auto;
`
const CardWeightAndPrice = styled(CardTitle)`
  font-size: small;
  padding-bottom: 20px;

  &:hover {
    color: black;
    cursor: auto;
`

const CoffeeCards = ({cards}) => {


    const match = useRouteMatch()
    const cardList = cards.map(cards => {
        return (
            <Div>
                <Img src={cards.image}/>
                <CardTitle><Link to={`${match.url}/${cards.id}`}>{cards.title}</Link></CardTitle>
                <CardAccentText>{cards.accentText}</CardAccentText>
                <CardWeightAndPrice>{cards.weight} {cards.price} </CardWeightAndPrice>
            </Div>
        )
    })


    return (
        <>
            <Router>
                {/*<div>*/}
                {/*    {cardList.length > 0 ?*/}
                {/*        cardList*/}
                {/*        :*/}
                {/*        <p>*/}
                {/*            Kein mehr koffee*/}
                {/*        </p>*/}
                {/*    }*/}
                {/*</div>*/}
                <Switch>
                    <Route path={`${match.url}/:cardsId`}>
                        <IndividualItem data={cards}/>
                    </Route>
                    <Route>
                        <div>
                            {cardList.length > 0 ?
                                cardList
                                :
                                <p>
                                    Kein mehr koffee
                                </p>
                            }
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
// }

}


export default CoffeeCards;