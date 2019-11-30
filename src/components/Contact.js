import React from "react"
import {Link} from "gatsby"
import './Header.css'

export const Contact =  () => 
<ul>
    <li> <Link to='/' activeClassName='activeLink'>Home</Link> </li>
    <li><Link to='/about-us' activeClassName='activeLink'>About</Link></li>
</ul>


