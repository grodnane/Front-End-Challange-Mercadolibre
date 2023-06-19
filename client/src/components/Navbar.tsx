import { Searchbar } from "./Searchbar"

export const Navbar = ()=> {
    return <nav className="w-full bg-[#fff159] h-14 flex flex-row justify-center items-center p-2">
        <div className="logo m-12">
            {/* Old logo to avoid phishing bans */}
            <img src="../../public/mali.png" alt="logo" width={52} height={40} style={{borderRadius:9999}}/>
        </div>
        <div className="searchbar w-4/5 ">
            <Searchbar />
        </div>

    </nav>
}