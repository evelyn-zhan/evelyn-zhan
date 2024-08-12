import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function About({ darkMode }) {
    const location = useLocation();

    return (
        <div>
            <div className="flex flex-col gap-y-2 5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">Howdy! I am <span className={darkMode ? 'text-primary' : 'text-darker'}>Evelyn</span>.</h1>
                <div>
                    <p>💻 Computer Science '23</p>
                    <p>📍 Medan, Indonesia</p>
                    <p>☁️ A dreamer and an achiever</p>
                </div>
            </div>

            <nav className={`mt-8 py-1 flex flex-row gap-x-6 lg:gap-x-10 font-semibold ${darkMode ? 'text-grey' : 'text-darker-grey'} overflow-x-scroll lg:overflow-x-auto`}>
                <Link to="/" className={`${location.pathname === "/" ? (darkMode ? 'text-primary' : 'text-darker') : (darkMode ? 'hover:text-white' : 'hover:text-black')} flex flex-row gap-x-2 items-center trasnition-all ease-in-out duration-600`}>
                    <i className="ri-search-line"></i>
                    <span>Overview</span>
                </Link>

                <Link to="/about/education" className={`${location.pathname === "/about/education" ? (darkMode ? 'text-primary' : 'text-darker') : (darkMode ? 'hover:text-white' : 'hover:text-black')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                    <i className="ri-graduation-cap-line"></i>
                    <span>Education</span>
                </Link>

                <Link to="/about/experience" className={`${location.pathname === "/about/experience" ? (darkMode ? 'text-primary' : 'text-darker') : (darkMode ? 'hover:text-white' : 'hover:text-black')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                    <i className="ri-briefcase-line"></i>
                    <span>Experience</span>
                </Link>

                <Link to="/about/achievements" className={`${location.pathname === "/about/achievements" ? (darkMode ? 'text-primary' : 'text-darker') : (darkMode ? 'hover:text-white' : 'hover:text-black')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                    <i className="ri-trophy-line"></i>
                    <span>Achievements</span>
                </Link>

                <Link to="/about/certification" className={`${location.pathname === "/about/certification" ? (darkMode ? 'text-primary' : 'text-darker') : (darkMode ? 'hover:text-white' : 'hover:text-black')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                    <i className="ri-award-line"></i>
                    <span>Certifications</span>
                </Link>
            </nav>

            <hr className="mb-10 border-gray-600" />
        </div>
    )
}