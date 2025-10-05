import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md shadow-md">
                <nav className="flex flex-col sm:flex-row justify-between items-center py-3 px-[8%] text-white transition-all duration-300">

                    {/* Logo */}
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        WorldAtlas
                    </h1>

                    {/* Nav Links */}
                    <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 mt-3 sm:mt-0">
                        {["/", "/about", "/country", "/contact"].map((path, index) => {
                            const names = ["Home", "About", "Country", "Contact"];
                            return (
                                <li key={path}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `relative font-medium tracking-wide transition duration-300 
                      hover:text-cyan-400 ${isActive
                                                ? "text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
                                                : "text-gray-300"
                                            }`
                                        }
                                    >
                                        {names[index]}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
