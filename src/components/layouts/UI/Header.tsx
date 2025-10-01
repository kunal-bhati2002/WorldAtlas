import { NavLink } from "react-router-dom";

function Header() {
    return (<>
        <div className="flex justify-between bg-gray-700 py-2 px-[10%]" >
            <h1 className="text-2xl">WorldAtlas</h1>
            <ul className="flex gap-6">
                <li><NavLink to="/"
                    className={({ isActive }) => isActive ? "text-gray-500" : "hover:text-gray-400"
                    }
                >Home</NavLink ></li>
                <li><NavLink to="/about"
                    className={({ isActive }) => isActive ? "text-gray-500" : "hover:text-gray-400"
                    }
                >About</NavLink ></li>
                <li><NavLink to="/country"
                    className={({ isActive }) => isActive ? "text-gray-500" : "hover:text-gray-400"
                    }
                >Country</NavLink ></li>
                <li><NavLink to="/contact"
                    className={({ isActive }) => isActive ? "text-gray-500" : "hover:text-gray-400"
                    }
                >Contact</NavLink ></li>
            </ul>
        </div>
    </>);
}

export default Header