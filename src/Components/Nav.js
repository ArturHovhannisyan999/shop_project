import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <div className="content_nav">
                <div>
                    <ul className="menu">
                        <li><NavLink to="#">Home</NavLink></li>
                        <li><NavLink to="#">About Us</NavLink></li>
                        <li><NavLink to="#">Service</NavLink></li>
                        <li><NavLink to="#">Gallery</NavLink></li>
                        <li><NavLink to="#">Contacts</NavLink></li>
                    </ul>
                    <h1>~ СТОЛЫ ~</h1>
                </div>
            </div>
        </nav>
    )
}