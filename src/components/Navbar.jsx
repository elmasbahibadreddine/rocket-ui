import { useEffect, useState } from "react";
import { FaSignOutAlt,FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({hideNavbar}) => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(()=>{
        if(window.location.pathname == '/')
            setCurrentPage('home')
        else if(window.location.pathname == '/account')
            setCurrentPage('account')

    },[])
    return(
        <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-dark-shadow flex justify-end">
            <ul className="w-10/12 max-w-72 h-full bg-slate-50  flex  flex-col justify-start items-end">
                <button onClick={hideNavbar} className="w-8 h-8 flex items-center justify-center m-4  bg-violet-100 rounded-md  text-lg transition-all ease-in-out duration-75 hover:bg-violet-300">
                    <FaArrowRight/>
                </button>
                <li className="w-full hover:bg-violet-100 transition-all ease-in-out duration-100">
                    <Link to='/logout' className="flex items-center p-4 border-b">
                        <div className="p-2 text-sm bg-violet-300 rounded-md mr-2 ">
                            <FaSignOutAlt />
                        </div>
                        <p className="font-semibold">Log out</p>
                    </Link>
                </li>
            </ul>
        </div> 
    )
}

export default Navbar