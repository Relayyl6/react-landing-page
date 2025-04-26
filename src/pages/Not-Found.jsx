import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../context/context"


function NotfoundPage() {

    const { resetNavigation } = useContext(GlobalContext);

    const navigate = useNavigate()

    const handleRedirect = () => {
        resetNavigation();
        navigate('/')
    }

    return (
        <div className="fixed mx-auto min-w-full px-8 flex max-lg:top-[20rem] max-lg:flex-col lg:inline-block text-center 
                        items-center justify-center top-5">
            <h1 className="relative text z-2">This page doesnt exist</h1> 
            <h1 className="underline text-2xl text-indigo-700">
                <button onClick={handleRedirect}>
                    Return to the main page
                </button>                
            </h1>
        </div>
    )
}

export default NotfoundPage