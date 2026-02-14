import SearchBar from "../SearchBar"
import { NavLink } from "react-router-dom"
import "./index.css"
const NavBar = ({ onSearch }) => {
    return (
        <div className="navbar">
            <SearchBar onSearch={onSearch} />
            <div className="nav-buttons">
                <button><NavLink to="/home">Home</NavLink></button>
                <button><NavLink to="/about">About</NavLink></button>
                <button><NavLink to="/favorites">Favorites</NavLink></button>
            </div>

        </div>
    )
}

export default NavBar