import React from 'react'
import Good from './Good'

export default function Goods (props) {
    const {goods = [], addOrder = Function.prototype} = props

    if (!goods.length) <h2>Nothing</h2>

    return (
        <div className="goods">
            {
                goods.map(good => {
                    return <Good key={good.mainId} {...good} addOrder={addOrder}/>
                })
            }
        </div>
    )
}