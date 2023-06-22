import { Price } from '../types'
import { converThounsends, sign } from '../utils/helpers'


function Price(props:Price) {
   
    
    const {amount,currency,decimals} =props

  return (
    <div className="priceContainer">
        <span>
            {/* Format the currency */}
            <span>{sign(currency)}</span>

            {/* Format the price if the amount is over 1000  */}
            {amount >1000 ?<span>{converThounsends(amount)}</span> : <span>{amount}</span>}
            
            
            {/* decimals are not used in api, so the usage ll be the following. 
                uncomment this
            <span className=''>{','+decimals}</span> 
            */}
        </span>

    </div>
  )
}

export default Price