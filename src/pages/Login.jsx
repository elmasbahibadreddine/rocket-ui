import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import URLs from '../urls'
import { useNavigate ,Link} from 'react-router-dom';
import { FaLock, FaUserAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosWarning } from "react-icons/io";




const Login = ({hideNavbar,hideNavBtn})=> {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [usernameFocus,setUsernameFocus] = useState(false)
    const [passwordFocus,setPasswordFocus] = useState(false)
    const [hiddenPassword,setHiddenPassword] = useState(true)
    const [errorMsg,setErrorMsg] = useState('')
    
    

    const handleLogin = ()=>{
        if(username.length <= 0 || password.length <= 0)
            return false

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
            if(res.status == 401){
                setIsLoading(false)
                setErrorMsg('Username or password is incorect!')
            }
            else if (res.status == 201)
                navigate('/')
            else
                navigate('/error')
          })
    }

    useEffect(()=>{
        hideNavbar()
        hideNavBtn()
    },[])

    useEffect(()=>{
        fetch(URLs.username,{
            method: 'GET',
            credentials: 'include' 
        }).then(res=>{
            if(res.status == 403)
                setIsLoading(false)
            else if (res.status == 200)
                navigate('/')
            else
                navigate('/error')
        })
    },[])

    if(isLoading)
        return <Loader/>
    else
        return(
            <form onSubmit={ev => ev.preventDefault()}  className="w-full max-w-96 p-6 sm:shadow-md rounded-md sm:bg-white flex flex-col items-center justify-center">
                <div className={`flex h-12 w-full overflow-hidden rounded-lg border-2 transition-all ease-in-out duration-100 ${usernameFocus ? 'border-violet-700' : 'border-slate-200'} bg-slate-50`}>
                    <div className={`transition-all ease-in-out duration-100 h-full w-14 flex justify-center items-center ${usernameFocus ? 'text-violet-700' : 'text-slate-400'}`}>
                        <FaUserAlt/>
                    </div>
                    <input onBlur={() => setUsernameFocus(false)} onFocus={() => setUsernameFocus(true)}  className='w-full h-full bg-transparent focus:outline-none pr-5 text-slate-800 placeholder:text-slate-400' value={username} onChange={ev => setUsername(ev.target.value)} type='text' placeholder='Username'/>
                </div>
                <div className={`mt-2 transition-all ease-in-out duration-100 relative flex h-12 w-full overflow-hidden rounded-lg border-2 ${passwordFocus ? 'border-violet-700' : 'border-slate-200'} bg-slate-50`}>
                    <div className={`transition-all ease-in-out duration-100 h-full w-14 flex justify-center items-center ${passwordFocus ? 'text-violet-700' : 'text-slate-400'}`}>
                        <FaLock />
                    </div>
                    <input className='w-full h-full bg-transparent focus:outline-none pr-10 text-slate-800 placeholder:text-slate-400' onBlur={() => setPasswordFocus(false)} onFocus={() => setPasswordFocus(true)} value={password} onChange={ev => setPassword(ev.target.value)} type={hiddenPassword ? 'password' : 'text'} placeholder='Password'/>
                    <button onClick={()=> setHiddenPassword(!hiddenPassword)} className='flex justify-center items-center text-slate-400 text-xl transition-all duration-75 ease-in-out hover:bg-slate-200 rounded-full p-1.5 absolute top-1.5 right-1.5'>
                        {hiddenPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                </div>
                {errorMsg.length >0 ? <div className=" text-red-500 flex justify-center items-center mt-2">
                    <IoIosWarning/>
                    <p className="text-sm text-red-500 font-semibold ml-1 mt-1">{errorMsg}</p>
                </div> : ''}
                <button onClick={handleLogin} className={`w-full h-11 transition-all ease-in-out duration-75  rounded-lg bg-violet-700 text-white hover:bg-violet-900 font-semibold capitalize mt-3`}>
                    Log in
                </button>
                <Link to='/register' className={`flex justify-center items-center w-full h-11 transition-all ease-in-out duration-75  rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 font-semibold capitalize mt-2`}>
                    Create new account
                </Link>
            </form>
        )
}

export default Login