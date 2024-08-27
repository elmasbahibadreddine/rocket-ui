import { FaRocketchat } from "react-icons/fa"
import { IoMenuSharp } from "react-icons/io5";
import { FaUserAlt } from 'react-icons/fa';
import URLs from '../urls';



const Header = ({fullname,showAccountBtn,showNavBar,showNavBtn})=> {
    return (
        <header className="w-full px-4 lg:px-8 flex justify-center shadow bg-violet-50">
            <div className={`max-w-7xl w-full h-14 flex items-center relative ${showNavBtn? 'justify-between ':''}`}>
                <div className="flex justify-center items-center">
                    {showNavBtn ? 
                    <button onClick={showNavBar} className="p-2 bg-violet-100 rounded-md text-violet-700 text-2xl transition-all ease-in-out duration-75 hover:bg-violet-300 lg:hidden">
                        <IoMenuSharp/>
                    </button> 
                    : ''}
                    <div className="md:flex ml-4 lg:ml-0 hidden">
                        <FaRocketchat className="text-3xl text-violet-700"/>
                        <h1 className="text-center text-lg mt-1 text-violet-700 font-bold ml-2" >Rocket</h1>  
                    </div>
                </div>
                <div className="flex ml-4 md:hidden">
                        <FaRocketchat className="text-3xl text-violet-700"/>
                        <h1 className="text-center text-lg mt-1 text-violet-700 font-bold ml-2" >Rocket</h1>  
                </div>
                {showAccountBtn? 
                    <button className="flex items-center justify-center transition-all duration-150 ease-in-out md:hover:bg-violet-200 md:bg-violet-100 md:px-3 md:py-1 rounded-lg">
                    <div style={{backgroundImage:`url("${URLs.profilePicture}")`}} className="bg-origin-border bg-contain bg-no-repeat bg-center w-9 h-9 flex justify-center items-center text-violet-300  border-violet-700 border-2 rounded-full md:mr-2">
                        
                    </div>
                    <p className="mt-1 text-sm text-slate-600 font-semibold md:block hidden">{fullname.substring(0,20).length >= 20 ? fullname.substring(0,20)+'...' : fullname.substring(0,20)}</p>
                </button>
                :''}
                
            </div>
        </header>
    )
}

export default Header