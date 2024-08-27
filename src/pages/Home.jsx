import { useEffect,  } from "react"
import { MdWavingHand } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loader from "../components/Loader"
import URLs from '../urls'

const Home = ({showAccountBtn,fullname = '', setFullname, hideNavbar,showNavBtn})=> {
    const navigate = useNavigate();
    useEffect(()=>{
        hideNavbar()
        showNavBtn()
        showAccountBtn()
    },[])
    useEffect(()=>{
        if(fullname.length <= 0){
            fetch(URLs.fullname, {
                method: 'GET',
                credentials: 'include' 
            }).then(res => {
                if(res.status == 403)
                    navigate('/login')
                else if(res.status == 200){
                    res.json().then(body => {
                        setFullname(body.fullname)
                    })
                }
                else
                    navigate('/error')
            })
        }
            
    },[])

    if(fullname.length <= 0)
        return <Loader/>
    else
        return (
            <div className="text-4xl font-semibold w-full p-4 flex flex-col justify-center items-center">
                <MdWavingHand  className="text-6xl mb-6 text- animate-bounce"/>
                <p className="text-center">Hi <span className="text-violet-700 font-bold">{fullname}</span>,</p>
                <p className="mt-3 text-center">Welcome back!</p>
            </div>
    )
            
}

export default Home