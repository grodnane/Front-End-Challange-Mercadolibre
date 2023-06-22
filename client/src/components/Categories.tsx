
function Categories({categories,h1}:{categories:string[],h1:(string|null|undefined)}) {

    return (
                <div className="categoryContainer mb-3 w-full max-w-[900px]  mt-2">
                    <ul className=' flex flex-row gap-2 '>
                        {categories.map((cat, _i)=> {
                            
                            const Divider = <div  className='text-[#666]'>
                                                {cat + ' > '}
                                            </div>

                            return <div key={_i}>
                                    {/* eval the index in order to add the divider */}
                                        {_i===categories.length-1 ? <div  className='text-[#666]' >{cat}</div>: Divider }
                                    </div>
                        })}
                    </ul>

                    <h1 className="font-semibold text-2xl">{h1 && h1?.charAt(0).toUpperCase() + h1?.slice(1,h1.length).toLowerCase() }</h1>
                </div>
  )
    }

export default Categories