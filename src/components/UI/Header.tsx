import { NavLink } from "react-router-dom";

function Header() {
    return (<>
        <header className="flex flex-col text-center sm:flex-row justify-between items-center bg-[#202020] py-2 px-[10%]" >
            <h1 className="text-2xl">WorldAtlas</h1>
            <ul className="flex flex-col mt-2 gap-y-2 sm:flex-row gap-6">
                <li><NavLink to="/"
                    className={({ isActive }) => isActive ? "text-black" : "hover:text-black"
                    }
                >Home</NavLink ></li>
                <li><NavLink to="/about"
                    className={({ isActive }) => isActive ? "text-black" : "hover:text-black"
                    }
                >About</NavLink ></li>
                <li><NavLink to="/country"
                    className={({ isActive }) => isActive ? "text-black" : "hover:text-black"
                    }
                >Country</NavLink ></li>
                <li><NavLink to="/contact"
                    className={({ isActive }) => isActive ? "text-black" : "hover:text-black"
                    }
                >Contact</NavLink ></li>
            </ul>
        </header>
    </>);
}

export default Header