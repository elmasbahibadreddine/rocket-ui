import { FaLock, FaUserAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosWarning } from "react-icons/io";
import { useEffect, useState } from "react"
import { Link} from 'react-router-dom';
import URLs from '../urls';
import { usePasswordValidityChecker } from '../hooks/InputeValidityChecking';


const Register1 = ({setIsLoading, username, password, confirmPassword, setUsername, setPassword, setConfirmPassword, invalidUsername, invalidPassword, invalidConfirmPassword, setInvalidUsername, setInvalidPassword, setInvalidConfirmPassword, showRegister2, hideRegister1,showRegisterFaild}) =>{
    const [usernameFocus,setUsernameFocus] = useState(false)
    const [passwordFocus,setPasswordFocus] = useState(false)
    const [confirmPasswordFocus,setConfirmPasswordFocus] = useState(false)
    const [hiddenPassword,setHiddenPassword] = useState(true)
    const [hiddenConfirmPassword,setHiddenConfirmPassword] = useState(true)
    



    const handleRegister1 = async () => {
        setIsLoading(true)

        if(!usePasswordValidityChecker(password))
            setInvalidPassword(true)

        if(password != confirmPassword)
            setInvalidConfirmPassword(true)

        const res = await fetch(URLs.checkUsernameValidity,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({username}),
        })
        
        if(res.status == 400)
            setInvalidUsername(true)
        
        if(res.status != 400 && res.status != 200){
            hideRegister1()
            showRegisterFaild()
        }
        
        if(res.status == 200 && password == confirmPassword && usePasswordValidityChecker(password)){
            hideRegister1()
            showRegister2()
        }

        setIsLoading(false)

    }

    
    return(
        <>
            <div className='w-full'>
                <div className={`flex h-12 w-full overflow-hidden rounded-lg border-2 transition-all ease-in-out duration-100 ${usernameFocus ? 'border-violet-700' : 'border-slate-200'} bg-slate-50 ${invalidUsername? 'border-red-400' : ''}`}>
                    <div className={`transition-all ease-in-out duration-100 h-full w-14 flex justify-center items-center ${usernameFocus ? 'text-violet-700' : 'text-slate-400'} ${invalidUsername? 'text-red-400' : ''}`}>
                        <FaUserAlt/>
                    </div>
                    <input onBlur={() => setUsernameFocus(false)} onFocus={() => {setUsernameFocus(true); setInvalidUsername(false)}}  className='w-full h-full bg-transparent focus:outline-none pr-5 text-slate-800 placeholder:text-slate-400' value={username} onChange={ev => setUsername(ev.target.value.toLowerCase())} type='text' placeholder='Username'/>
                </div>
                {invalidUsername? <div className=" text-red-400 flex  items-center">
                        <IoIosWarning/>
                        <p className="text-sm text-red-400 font-semibold ml-1 mt-1">This Username cannot be used.</p>
                    </div> : ''}
            </div>

            <div className='w-full'>
                <div className={`mt-2 transition-all ease-in-out duration-100 relative flex h-12 w-full overflow-hidden rounded-lg border-2 ${passwordFocus ? 'border-violet-700' : 'border-slate-200'} bg-slate-50 ${invalidPassword? 'border-red-400' : ''}`}>
                    <div className={`transition-all ease-in-out duration-100 h-full w-14 flex justify-center items-center ${passwordFocus ? 'text-violet-700' : 'text-slate-400'} ${invalidPassword? 'text-red-400' : ''}`}>
                        <FaLock />
                    </div>
                    <input className='w-full h-full bg-transparent focus:outline-none pr-10 text-slate-800 placeholder:text-slate-400' onBlur={() => setPasswordFocus(false)} onFocus={() => {setPasswordFocus(true) ;setInvalidPassword(false)}} value={password} onChange={ev => setPassword(ev.target.value)} type={hiddenPassword ? 'password' : 'text'} placeholder='Password'/>
                    <button onClick={()=> setHiddenPassword(!hiddenPassword)} className='flex justify-center items-center text-slate-400 text-xl transition-all duration-75 ease-in-out hover:bg-slate-200 rounded-full p-1.5 absolute top-1.5 right-1.5'>
                        {hiddenPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                </div>
                {invalidPassword? <div className=" text-red-400 flex mt-1">
                        <div>
                        <IoIosWarning/>
                        </div>
                        <p className="text-sm text-red-400 font-semibold ml-1 ">Password must be at least 8 characters, including uppercase, lowercase, a number, and a special character.</p>
                    </div> : ''}
            </div>

            <div className='w-full'>
                <div className={`mt-2 transition-all ease-in-out duration-100 relative flex h-12 w-full overflow-hidden rounded-lg border-2 ${confirmPasswordFocus ? 'border-violet-700' : 'border-slate-200'} bg-slate-50 ${invalidConfirmPassword? 'border-red-400' : ''}`}>
                    <div className={`transition-all ease-in-out duration-100 h-full w-14 flex justify-center items-center ${confirmPasswordFocus ? 'text-violet-700' : 'text-slate-400'} ${invalidConfirmPassword? 'text-red-400' : ''}`}>
                        <FaLock />
                    </div>
                    <input className='w-full h-full bg-transparent focus:outline-none pr-10 text-slate-800 placeholder:text-slate-400' onBlur={() => setConfirmPasswordFocus(false)} onFocus={() => {setConfirmPasswordFocus(true) ;setInvalidConfirmPassword(false)}} value={confirmPassword} onChange={ev => setConfirmPassword(ev.target.value)} type={hiddenConfirmPassword ? 'password' : 'text'} placeholder='Confirm password'/>
                    <button onClick={()=> setHiddenConfirmPassword(!hiddenConfirmPassword)} className='flex justify-center items-center text-slate-400 text-xl transition-all duration-75 ease-in-out hover:bg-slate-200 rounded-full p-1.5 absolute top-1.5 right-1.5'>
                        {hiddenConfirmPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                </div>
                {invalidConfirmPassword? <div className=" text-red-400 flex mt-1">
                        <div>
                        <IoIosWarning/>
                        </div>
                        <p className="text-sm text-red-400 font-semibold ml-1 ">Passwords do not match.</p>
                    </div> : ''}
            </div>
            <button onClick={handleRegister1}  className={`w-full h-11 transition-all ease-in-out duration-75  rounded-lg bg-violet-700 text-white hover:bg-violet-900 font-semibold capitalize mt-3`}>
                Next
            </button>
            <Link to='/login' className={`flex justify-center items-center w-full h-11 transition-all ease-in-out duration-75  rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 font-semibold capitalize mt-2`}>
                Log in
            </Link>
        </>
    )
}

export default Register1