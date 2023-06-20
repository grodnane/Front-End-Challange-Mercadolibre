import React from 'react'
import { Price } from '../types'
import { sign } from '../utils/helpers'


function Price(props:Price) {

    const {amount,currency,decimals} =props

  return (
    <div className="priceContainer">
        <span>
            <span>{sign(currency)}</span>
            <span>{amount}</span>
            <span className=''>{decimals}</span>
        </span>

    </div>
  )
}

export default Price