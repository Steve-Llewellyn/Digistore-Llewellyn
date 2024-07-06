import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    
    return(
        <nav className="navbar">
            <div className="brand">
                DigiCards
            </div>
            <ul>
                <li>Booster Packs</li>
                <li>Singles</li>
                <li>Premade Decks</li>
            </ul>

            <CartWidget />

        </nav>
    )
}

export default NavBar