import React from "react"
import { Link, useLocation } from "react-router-dom";

function Navtabs() {
    return (
        <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/discover">Discover</Link></li>

        </ul>
    )
}

export default Navtabs;