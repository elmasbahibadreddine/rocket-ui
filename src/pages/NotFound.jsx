import { Link } from 'react-router-dom';
import { useEffect } from "react"

const NotFound = ({hideAccountBtn,hideNavbar,hideNavBtn}) => {
    useEffect(()=>{
        hideNavbar()
        hideNavBtn()
        hideAccountBtn()
    },[])
    return(
        <div className='w-1/3 min-w-96 p-4 flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-violet-700 font-black mb-4'>404 - Not Found</h1>
            <p className='text-slate-700 mb-4 text-center'>Oops! The page you're looking for doesn't exist. It might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link className='px-6 transition-all ease-in-out duration-75 hover:bg-violet-900 py-2 text-lg bg-violet-700 text-white font-bold rounded-md ' to='/'>Go to Home page</Link>
        </div>
    )
}

export default NotFound