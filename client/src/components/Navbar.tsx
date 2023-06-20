import { FormEvent, useState } from "react"
import {Link, useNavigate , useSearchParams } from "react-router-dom";

export const Navbar = ()=> {
    const [input, setInput] = useState<string>('')
    
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate =useNavigate()
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        //early return on empty submit
        if(input===null){
            return
        }       
        const params = input;
        const URLParams = {search:params}
       // console.log(URLParams)
       navigate(`items?search=${params}`)
        ;
        
      }
    
      const handleWipeSearchBar =()=>{
        console.log(input)
        setInput('')
      }

    

    return <nav className="w-full bg-[#fff159] bg-opacity-100 h-14 flex flex-row justify-center items-center p-2 mb-11">
        <div className="logo m-12">
            
            
            <Link to={"/"} onClick={handleWipeSearchBar}>
                <img src="../../public/meli.svg" alt="logo" width={112} height={90} style={{backgroundColor:'#fff159'}}/>
            </Link>
            
        </div>
        <div className="searchbar w-2/5 ">
        <div className="input flex flex-row w-full max-w-[1000px] rounded-sm">
        <form onSubmit={(event) => handleSubmit(event)} className="w-full flex flex-row">
            <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Nunca dejes de buscar"  className="w-full h-9 p-4 rounded-l-sm outline-0 outline-slate-100 outline-offset-0 placeholder-opacity-50"/>
            <button type="submit" className="left-0 bg-slate-100 h-9 w-9 flex justify-center items-center rounded-r-sm">
                <img src="../../public/search.png" height={20} width={20} />
            </button>
        </form>

    </div>
        </div>

    </nav>
}