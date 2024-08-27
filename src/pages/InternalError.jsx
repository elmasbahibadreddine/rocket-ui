import { Link } from 'react-router-dom';
import { useEffect } from "react"

const InternalError = ({hideAccountBtn,hideNavbar,hideNavBtn}) => {
    useEffect(()=>{
        hideNavbar()
        hideNavBtn()
        hideAccountBtn()
    },[])
    return(
        <div className='w-1/3 min-w-96 p-4 flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-violet-700 font-black mb-4 text-center'>Something Went Wrong :(</h1>
            <p className='text-slate-700 mb-4 text-center'>We are experiencing technical difficulties at the moment. Please try again later.</p>
        </div>
    )
}

export default InternalError