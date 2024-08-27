import { FaRocketchat } from "react-icons/fa";

const Loader = () => {

    return (
        <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute w-10 h-10 border-4 border-l-transparent border-violet-700 rounded-full animate-spin"></div>
            <FaRocketchat className="text-lg text-violet-700 animate-pulse"/>
        </div>

    )
}

export default Loader