import { Children } from "react"
import { Link } from "react-router-dom"



const Button = ({ children, link, className, ...props }) => {

    return (

        <button className={`button is-primary ${className}`}  {...props}>{children}</button>

    )
}

export default Button