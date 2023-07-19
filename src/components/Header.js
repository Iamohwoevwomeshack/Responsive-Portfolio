import {useState} from "react";
import {FiSearch} from "react-icons/fi";
import {RiContrast2Fill} from "react-icons/ri";

function Header(){

    const [activeHam, setAtiveHam] = useState(false);

    const menuItemss =(
        <>
            <a href="/about">About</a>
            <a href="/">Home</a>
        </>
    );

    const menuItems = (
        <>
            <a href="/about">About</a>
            <a href="/">Home</a>
        </>
    );

    return(<div className="navbar-container">
        <nav className="nav">
            <div className="nav-container">
                <button className={activeHam ? "hambuger active-hamburger" : "hambuger"} onClick={() => setAtiveHam(!activeHam)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="nav-logo">
                <p>FAMILYZHOME</p>
                </div>
                <div className="nav-menu">
                    {menuItems}
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Search" />
                    <label className="search-icon"><FiSearch/></label>
                    <label className="icon"><a href="/#"><RiContrast2Fill/></a></label>
                </div>
            </div>
        </nav>
        {activeHam && <div className="nav-dropdown">{menuItemss}</div>}
    </div>)
}

export default Header;