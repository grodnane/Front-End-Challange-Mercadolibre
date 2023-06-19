
export const Searchbar = ()=>{
    return( 
    <div className="input flex flex-row w-full rounded-sm">
        <form action="search" className="w-full flex flex-row">
            <input type="text" placeholder="Nunca dejes de buscar" className="w-4/5 h-9 p-4 rounded-l-sm outline-0 outline-slate-100 outline-offset-0"/>
        <button type="submit" className="left-0 bg-slate-100 h-9 w-9 flex justify-center items-center rounded-r-sm"><img src="../../public/search.png" height={20} width={20} /></button>
        </form>

    </div>
)}