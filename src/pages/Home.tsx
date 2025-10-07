import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import About from "./About";

function Home() {
    return (
        <>
            <section className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-12 my-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
                {/* Text Content */}
                <div className="md:pr-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                        Explore the World, One Country at a Time.
                    </h1>
                    <p className="text-sm sm:text-base my-6 text-gray-300">
                        Discover the history, culture, and beauty of every country. Sort, search, and filter through countries to find details you need.
                    </p>
                    <NavLink
                        to="/country"
                        className="inline-flex items-center gap-2 bg-[#202020] text-white px-4 py-2 text-sm rounded-md hover:bg-black hover:scale-[1.02] transition-all"
                    >
                        Start Travelling <FaArrowRightLong />
                    </NavLink>
                </div>

                {/* Image */}
                <div>
                    <img
                        src="/images/Logo.png"
                        alt="Logo Photo"
                        className="w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg"
                    />
                </div>
            </section>
            <About />
        </>
    );
}

export default Home;
