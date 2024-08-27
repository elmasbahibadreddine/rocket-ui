import { FaRocketchat } from "react-icons/fa"
import { IoMenuSharp } from "react-icons/io5";



const Header = ({showNavBar,showNavBtn})=> {
    return (
        <header className="w-full px-4 text-center shadow bg-violet-50">
            <div className="max-w-7xl h-14 flex items-center justify-between relative">
                <div className="flex">
                    <FaRocketchat className="text-3xl text-violet-700"/>
                    <h1 className="text-center text-lg mt-1 text-violet-700 font-bold ml-2" >Rocket Messanger</h1>  
                </div>
                {
                    showNavBtn ? <button onClick={showNavBar} className="p-2 bg-violet-100 rounded-md text-violet-700 text-2xl transition-all ease-in-out duration-75 hover:bg-violet-300">
                    <IoMenuSharp/>
                </button> : '' 
                }
                
            </div>
        </header>
    )
}

export default Header