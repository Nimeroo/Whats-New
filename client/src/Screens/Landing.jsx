import { useNavigate } from "react-router"
import { useEffect } from "react"

function Landing() {
    let history = useNavigate()

    useEffect(() =>{
        history("/home")
    })
    
    return <h1>Redirecting to home...</h1>
}

export default Landing
