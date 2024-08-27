const Footer = ()=> {
    return (
        <footer className="w-full p-2 px-4 text-center bg-violet-50">
            <ul className="max-w-7xl flex items-center justify-center flex-wrap text-slate-700 text-sm">
                <li className="px-2 py-1 hover:underline cursor-pointer transition-all duration-75 ease-linear">About</li>
                <li className="px-2 py-1 hover:underline cursor-pointer transition-all duration-75 ease-linear">Help</li>
                <li className="px-2 py-1 hover:underline cursor-pointer transition-all duration-75 ease-linear">Terms</li>
                <li className="px-2 py-1 hover:underline cursor-pointer transition-all duration-75 ease-linear">Privacy</li>
                <li className=" text-nowrap px-2 py-1">© 2024 Rocket Messanger.</li>
            </ul>
        </footer>
    )
}

export default Footer