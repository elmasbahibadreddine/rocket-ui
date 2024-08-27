import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Loader from "../components/Loader"
import URLs from '../urls'



const RegisterSucceed = ({username,password}) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () =>{
        setIsLoading(true)

        fetch(URLs.login, {
            method: 'POST',
            credentials: 'include' ,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,password}),
          })
          .then(res => {
            if (res.status == 201)
                navigate('/')
            else
                navigate('/error')
                
          })
    }
    if(isLoading)
        return <Loader/>
    else 
        return(
            <div className='flex flex-col justify-center items-center text-center'>
                <BiSolidLike className='text-7xl text-violet-700 mb-5'/>
                <p>Your account has been created successfully! </p>
                <button onClick={handleLogin} className='px-6 mt-4 transition-all ease-in-out duration-75 hover:bg-violet-900 py-2  bg-violet-700 text-white font-bold rounded-md ' >Let's Start</button>
            </div>
    )
}

export default RegisterSucceed