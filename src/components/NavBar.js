import React from 'react'
import {NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
    return (
        <header className="bg-blueGray-400">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink
                     className="text-lg inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-900" 
                     activeClassName="text-blue-400 underline"
                     to="/" 
                     exact>
                        Home
                    </NavLink>
                    {/* <NavLink 
                        className="text-lg inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-900"
                        activeClassName="text-blue-400 underline" 
                        to="/post">
                        Blog Posts
                    </NavLink> */}
                    <NavLink 
                     className="text-lg inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-900"
                     activeClassName="text-blue-400 underline"
                     to="project">
                        Projects
                    </NavLink>
                    <NavLink 
                        className="text-lg inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-900"
                        activeClassName="text-blue-400 underline"
                        to="/about">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/hamza-qureshi-98373115a/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/Hamzaq96" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}

export default NavBar
