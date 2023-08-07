import SearchBar from "./SearchBar"
const NavBar = () => {
    return(
        <div>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
}

export default NavBar