import { NavLink } from "react-router-dom";

function CountryCard({ country }: any) {
    return (
        <li
            key={country.name.official}
            className="flex flex-col justify-between h-full rounded-lg p-6 border border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[hsl(285,29%,3%)] hover:scale-[1.03] hover:shadow-[0_0_15px_#00ffff30] transition-all duration-300"
        >
            <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="w-full h-40 object-cover rounded-md mb-4 shadow-md"
            />

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg sm:text-xl">
                    {country.name.common.length > 12
                        ? country.name.common.slice(0, 12) + "..."
                        : country.name.common}
                </h2>

                <p className="text-gray-400 text-sm sm:text-base">
                    Population:{" "}
                    <span className="text-white">{country.population.toLocaleString()}</span>
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                    Region: <span className="text-white">{country.region}</span>
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                    Capital: <span className="text-white">{country.capital}</span>
                </p>
            </div>

            <NavLink
                to={`/country/${country.name.common}`}
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
            >
                Read More →
            </NavLink>
        </li>
    );
}

export default CountryCard;
