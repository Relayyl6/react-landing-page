import { Link } from "react-router-dom"


function NotfoundPage() {

    return (
        <div className="fixed mx-auto min-w-full px-8 flex max-lg:top-[20rem] max-lg:flex-col lg:inline-block text-center 
                        items-center justify-center top-5">
            <h1 className="relative text z-2">This page doesnt exist</h1> 
            <h1 className="underline text-2xl text-indigo-700"><Link to={"../"}>Return to the main page</Link></h1>
        </div>
    )
}

export default NotfoundPage