import { Link } from "react-router-dom"
import error from '../../public/error.svg'


function Error404() {
    return (
      <div className='404Container flex flex-row items-center justify-center p-11  mw-[1018px] my-[48px] mx-auto w-[1018px] rounded-sm bg-white h-[204px]'>
          <div className="ErrorSVG">
              <img src={error} alt="error" style={{width:80,height:80}}/>
          </div>
          <div className="advice p-4 m-4">
              <h4 className='text-xl font-bold mb-4 text-center'>¡Ha ocurrido un error!</h4>
              <li className='list-disc'>Por favor vuelve al inicio o realiza una nueva busqueda.</li>
              <button className='rounded-md text-[#283072] bg-[#fff159] h-12 w-full font-bold mt-5' ><Link to={"/"}> Volver al inicio.</Link></button>
          
          </div>
      </div>
    )
  }
  
  export default Error404;