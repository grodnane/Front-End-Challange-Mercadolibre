import notFound from '../../public/notFound.svg'

function NotFound() {
  return (
    <div className='notFounContainer flex flex-row items-center justify-center p-11 h-[204px] mw-[1018px] my-[48px] mx-auto w-[1018px] rounded-sm bg-white'>
        <div className="searchSVG">
            <img src={notFound} alt="loupe" style={{width:80,height:80}}/>
        </div>
        <div className="advice p-4 m-4">
            <h4 className='text-xl font-bold mb-4'>Ups, no pudimos encontrar lo que buscabas.</h4>
            <li className='list-disc'>Escribí tu búsqueda en el campo que figura en la parte superior de la pantalla.</li>
        </div>
    </div>
  )
}

export default NotFound