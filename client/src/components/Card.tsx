import { Link} from 'react-router-dom'
import { Item } from '../types';
import Price from './Price';
import FreeShipping from './FreeShipping';

function Card({...props}:{props:Item,h1:(string|undefined|null)}) {
    

    const {id,title, price,picture, free_shipping }  = props.props
    
    
  return (
    
    

            <div className="container w-full p-4" >
            <Link {...props} to={`/items/${id}`}>
                   <div className='flex flex-row items-center gap-6'>

                    <figure className=''>
                    <img alt={id} src={picture} style={{width:150,height:150, borderRadius:6, outlineColor:'gray'}}/>
                    </figure>
                    <div className='CardLeftContainer flex flex-col '>
                    <div className="priceContainer">
                     <FreeShipping free_shipping={ free_shipping}/>   
                    <Price  {...price}/>
                    </div>
                    <h2>{title}</h2>
                    </div>
                   </div>
                
    
            </Link>
            </div>
   
  )
}

export default Card;