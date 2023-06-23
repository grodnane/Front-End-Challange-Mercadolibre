import truck from '../../public/truck.svg'

function FreeShipping( free_shipping:{free_shipping:boolean}) {
  return (
    <div className='freeShipping'>
        {free_shipping? <img src={truck} alt='green truck' style={{width:'14px', height:'14px'}} />
                        : 
        <div></div>
}
    </div>
  )
}

export default FreeShipping