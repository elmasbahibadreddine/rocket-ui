import { Link } from 'react-router-dom';
import { MdMoodBad } from "react-icons/md";

const RegisterFaild = () => {
    return(
        <div className='flex flex-col justify-center items-center text-center'>
            <MdMoodBad className='text-7xl text-violet-700 mb-5'/>
            <p>We are experiencing technical difficulties at the moment. Please try again later.</p>
            <Link className='px-6 mt-3 transition-all ease-in-out duration-75 hover:bg-violet-900 py-2  bg-violet-700 text-white font-bold rounded-md ' to='/login'>Go Back</Link>
        </div>
    )
}

export default RegisterFaild