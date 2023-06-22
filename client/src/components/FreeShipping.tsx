import React from 'react'

function FreeShipping( free_shipping:{free_shipping:boolean}) {
  return (
    <div className='freeShipping'>
        {free_shipping? <img src='../../public/truck.svg' alt='green truck' style={{width:'14px', height:'14px'}} />
                        : 
        <div></div>
}
    </div>
  )
}

export default FreeShipping