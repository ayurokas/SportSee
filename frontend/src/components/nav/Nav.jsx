import logo from "./../../assets/Sportsee.png";
import classes from "../nav/Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <header className={classes.nav}>
            <NavLink to="/">
                <div className={classes.nav_logo}>
                    <img src={logo} alt="Sportsee Logo" className={classes.nav_logo_pic}></img>
                    <h1>SportSee</h1>
                </div>
            </NavLink>
            <nav className={classes.nav_menu}>
                <ul className={classes.nav_menu_links}>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;