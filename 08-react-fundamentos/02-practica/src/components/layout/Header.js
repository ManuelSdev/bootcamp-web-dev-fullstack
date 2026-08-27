import { Link } from "react-router-dom"
import AuthButton from "../auth/AuthButton/AuthButton"
import Button from "../shared/Button"
import Search from "./Search"

const Header = () => {



    return (
        <div className="Header">
            <div className="container is-fluid">
                <div className="notification is-primary">
                    <Search></Search>
                    <Link to="/adverts/new"> <Button>Subir producto</Button></Link>
                    <AuthButton>Log</AuthButton>

                </div>
            </div>
        </div>
    )
}

export default Header