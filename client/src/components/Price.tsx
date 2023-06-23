import { Price } from '../types'
import { converThounsends } from '../utils/helpers'


function Price(props:Price) {
   
    
    const {amount,currency } =props
    
  return (
    <div className="priceContainer">
        <span className='flex'>
            <span> {converThounsends(amount,currency)}</span> 
        </span>

    </div>
  )
}

export default Price