import React from 'react'
import {useParams} from 'react-router-dom'

const IndividualItem = ({data}) => {
    const {cardsId} = useParams()
    const card = data.find(card => card.id === Number(cardsId))

    const individualItemInfo = card ?
        (
            <div>
                <img src={card.image}/>
                <h1>Etwas für dich</h1>
                <div>{card.title}</div>
                <div>{card.accentText}</div>
                <div>{card.weight} {card.price} </div>
            </div>
        )
        :
        <h1>Nothing to see here</h1>

    return (
        <div>
            {individualItemInfo}
        </div>
    );

}

export default IndividualItem;