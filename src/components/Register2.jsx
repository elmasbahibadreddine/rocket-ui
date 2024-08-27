import { useRef, useState } from "react"
import { FaUserAlt, FaCamera } from 'react-icons/fa';
import { IoIosWarning } from "react-icons/io";
import { useFullnameValidityChecker } from "../hooks/InputeValidityChecking";
import {} from '../helpers/func'
import URLs from "../urls";


const Register2 = ({picture,username,password,invalidPicture,setInvalidPicture,invalidFullname,setInvalidFullname,setPicture,fullname,setFullName,setIsLoading,showRegister1,hideRegister2,showRegisterFaild,showRegisterSucceed}) => {
    const [fullnameFocus,setFullnameFocus] = useState(false)
    const imgInputRef = useRef(null)

    const handleImageChange = ev =>{
        setInvalidPicture(false)
        const file = ev.target.files[0];
        if(file && file.type.startsWith('image/')){
            const reader = new FileReader()
            reader.onload = ()=>{
                setPicture(reader.result)
            }
            reader.readAsDataURL(file)
        }
        else{
            setInvalidPicture(true)
        }
    }

    const handleRegistartion = () => {
        if(!useFullnameValidityChecker(fullname))
            setInvalidFullname(true)

        if(useFullnameValidityChecker(fullname) && !invalidPicture){
            setIsLoading(true)
            fetch(URLs.register,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({picture,fullname,username,password}),
            }).then(res=>{
                if(res.status == 201){
                    hideRegister2()
                    showRegisterSucceed()
                    setIsLoading(false)
                }
                else{
                    hideRegister2()
                    showRegisterFaild()
                    setIsLoading(false)
                }
                
            })
        }
    }
    return(
        <>
            
            <div className='w-full mb-2'>
                <div className={`flex h-12 w-full overflow-hidden rounded-lg border-2 transition-all ease-in-out duration-100 ${fullnameFocus ? 'border-violet-700' : 'border-slate-200'} bg-slate-50 ${invalidFullname? 'border-red-400' : ''}`}>
                    <div className={`transition-all ease-in-out duration-100 h-full w-14 flex justify-center items-center ${fullnameFocus ? 'text-violet-700' : 'text-slate-400'} ${invalidFullname? 'text-red-400' : ''}`}>
                        <FaUserAlt/>
                    </div>
                    <input onBlur={() => setFullnameFocus(false)} onFocus={() => {setFullnameFocus(true); setInvalidFullname(false)}}  className='w-full h-full bg-transparent focus:outline-none pr-5 text-slate-800 placeholder:text-slate-400' value={fullname} onChange={ev => setFullName(ev.target.value.toCapitalCase())} type='text' placeholder='Fullname'/>
                </div>
                {invalidFullname? <div className=" text-red-400 flex  items-center">
                        <IoIosWarning/>
                        <p className="text-sm text-red-400 font-semibold ml-1 mt-1">Please provide a correct name.</p>
                    </div> : ''}
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <p className="w-full text-slate-400 mb-1 mt-4 ">Profile picture</p>
                <button onClick={() => imgInputRef.current.click()} style={{backgroundImage:`url("${picture}")`}}  className={`group bg-origin-border bg-contain bg-no-repeat bg-center  w-24 h-24 bg-sate-100 rounded-lg flex justify-center items-center border-2 border-slate-200 border-dashed hover:border-violet-700 transition-all ease-in-out duration-100 ${invalidPicture? 'border-red-400':''} `}>
                    <FaCamera className={`text-slate-300 text-xl group-hover:text-violet-700 transition-all ease-in-out duration-100 ${invalidPicture? 'text-red-600':''}`}/>
                </button>
                <input ref={imgInputRef} type="file" accept="image/*" onChange={handleImageChange} className=" hidden" />
                {invalidPicture? <div className=" text-red-400 flex  items-center">
                        <IoIosWarning/>
                        <p className="text-sm text-red-400 font-semibold ml-1 mt-1">Please provide a valid image.</p>
                    </div> : ''}
            </div>
            <div className="flex justify-between items-center w-full mt-8">
                <button onClick={()=>{showRegister1();hideRegister2()}} className={`h-11 w-full mr-3  transition-all ease-in-out duration-75  rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 font-semibold capitalize `} >Previous</button>
                <button onClick={handleRegistartion} className={`h-11 w-full ml-3 transition-all ease-in-out duration-75  rounded-lg bg-violet-700 text-white hover:bg-violet-900 font-semibold capitalize`}>Next</button>
            </div>
        </>
    )
}

export default Register2