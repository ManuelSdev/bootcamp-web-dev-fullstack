import { Link, NavLink } from "react-router-dom"
import './UserNavBar.css'

const UserNavBar = () => {
    /**
     *                 <NavLink to="/user/profile" activeClassName="side-selected"><li >Perfil</li></NavLink>
                    <NavLink to="/user/ads"><li>Anuncios</li></NavLink>
                    <NavLink to="/user/chat"><li>Chat</li></NavLink>
                    <NavLink to="/user/favs"><li>Favoritos</li></NavLink>
                    <NavLink to="/user/ratings"><li>Valoraciones</li></NavLink>
                    <NavLink to="/user/statistics"><li>Estadisticas</li></NavLink>
     */


    return (
        <div className="UserNavBar">
            SIDEBAR
            <ul>
                <li ><NavLink to="/user/profile" activeClassName="side-selected">Perfil</NavLink></li>
                <li ><NavLink to="/user/ads" activeClassName="side-selected">Anuncios</NavLink></li>
                <li ><NavLink to="/user/chat" activeClassName="side-selected">Chat</NavLink></li>
                <li ><NavLink to="/user/favs" activeClassName="side-selected">Favoritos</NavLink></li>
                <li ><NavLink to="/user/ratings" activeClassName="side-selected">Valoraciones</NavLink></li>
                <li ><NavLink to="/user/statistics" activeClassName="side-selected">Estadisticas</NavLink></li>

            </ul>
        </div>
    )
}

export default UserNavBar