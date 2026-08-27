import { Link, useLocation } from "react-router-dom"



const LinkButton = ({ children, link, className, handleButton, ...props }) => {
    //const location = useLocation()
    //console.log("LOCATION AL PULSAR LINK BUTTON", location)
    return (
        <Link onClick={handleButton} className={`button is-primary ${className}`} to={link} >
            {children}
        </Link >
    )
}

export default LinkButton