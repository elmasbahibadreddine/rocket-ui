import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import URLs from "../urls";
import Loader from "../components/Loader";


const Logout = ({handleLogout,hideNavbar,hideNavBtn}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        hideNavbar()
        hideNavBtn()
    },[])

    useEffect(()=>{
        fetch(URLs.logout, {
            method: 'DELETE',
            credentials: 'include' 
        }).then(res => {
            if(res.ok){
                handleLogout()
                navigate('/login')
            }
        }) 
    },[])

    return <Loader/>
}

export default Logout