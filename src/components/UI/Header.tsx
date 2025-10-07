import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md backdrop-saturate-150 shadow-md">
            <nav
                aria-label="Main navigation"
                className="flex flex-col sm:flex-row justify-between items-center py-3 px-[8%] max-w-7xl mx-auto text-white transition-all duration-300"
            >
                {/* Logo */}
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent select-none">
                    WorldAtlas
                </h1>

                {/* Nav Links */}
                <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-3 sm:mt-0">
                    {["/", "/about", "/country", "/contact"].map((path, index) => {
                        const names = ["Home", "About", "Country", "Contact"];
                        return (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `relative font-medium tracking-wide transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${isActive
                                            ? "text-cyan-400 after:w-full"
                                            : "text-gray-300 after:w-0 hover:after:w-full"
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
    );
}

export default Header;
