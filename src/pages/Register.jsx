import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import URLs from '../urls'
import { useNavigate } from 'react-router-dom';
import Register1 from '../components/Regester1'
import Register2 from '../components/Register2'
import RegisterSucceed from '../components/RegisterSucceed'
import RegisterFaild from '../components/RegisterFaild'


const Register = ({hideNavbar,hideNavBtn})=> {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true)

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [invalidUsername, setInvalidUsername] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false)

    const [fullname,setFullName] = useState('')
    const [invalidFullname, setInvalidFullname] = useState(false)
    const [invalidPicture, setInvalidPicture] = useState(false)
    const [picture,setPicture] = useState()

    const [showRegister1, setShowRegister1] = useState(true)
    const [showRegister2, setShowRegister2] = useState(false)
    const [showRegisterSucceed, setShowRegisterSucceed] = useState(false)
    const [showRegisterFaild, setShowRegisterFaild] = useState(false)

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
        return (
            <form onSubmit={ev => ev.preventDefault()}  className="w-full sm:max-w-96 p-6 sm:shadow-md rounded-md sm:bg-white flex flex-col items-center justify-center">
                {showRegister1? <Register1 setIsLoading={setIsLoading} username={username} password={password} confirmPassword={confirmPassword} setUsername={setUsername} setPassword={setPassword} setConfirmPassword={setConfirmPassword} invalidUsername={invalidUsername} invalidPassword={invalidPassword} invalidConfirmPassword={invalidConfirmPassword} setInvalidUsername={setInvalidUsername} setInvalidPassword={setInvalidPassword} setInvalidConfirmPassword={setInvalidConfirmPassword} showRegister2={()=>setShowRegister2(true)} hideRegister1={()=>setShowRegister1(false)} showRegisterFaild={()=>setShowRegisterFaild(true)} /> : ''}
                {showRegister2? <Register2 username={username} password={password} invalidPicture={invalidPicture} setInvalidPicture={setInvalidPicture} picture={picture} invalidFullname={invalidFullname} setInvalidFullname={setInvalidFullname} setPicture={setPicture} fullname={fullname} setFullName={setFullName}  setIsLoading={setIsLoading} showRegister1={()=> setShowRegister1(true)} hideRegister2={()=> setShowRegister2(false)} showRegisterFaild={()=>setShowRegisterFaild(true)} showRegisterSucceed={()=>setShowRegisterSucceed(true)} /> : ''}
                {showRegisterFaild? <RegisterFaild/> : ''}
                {showRegisterSucceed? <RegisterSucceed username={username} password={password}/> : ''}
            </form>
        )
}

export default Register