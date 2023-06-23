import { Price } from '../types'
import { converThounsends, sign } from '../utils/helpers'


function Price(props:Price) {
   
    
    const {amount,currency,decimals } =props
    
  return (
    <div className="priceContainer">
        <span className='flex'>
            <span> {converThounsends(amount,currency)}</span> 
        </span>

    </div>
  )
}

export default Price