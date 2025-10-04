import { NavLink } from "react-router-dom";

function CountryCard({ country }: any) {
    return (<>
        <li
            key={country.name.official}
            className="rounded-lg p-6 border border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[hsl(285,29%,3%)]"
        >
            <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full"
            />
            <h3 className="font-semibold text-xl">
                {country.name.common.length > 10 ? country.name.common.slice(0, 10) + "..." : country.name.common}
            </h3>
            <p className="text-gray-400">
                Population :&nbsp;
                <span className="text-white">
                    {country.population}
                </span>
            </p>
            <p className="text-gray-400">
                Region :&nbsp;
                <span className="text-white">
                    {country.region}</span>
            </p>
            <p className="text-gray-400">
                Capital :&nbsp;
                <span className="text-white">
                    {country.capital}
                </span>
            </p>
            <NavLink to={`/country/${country.name.common}`}>
                ReadMore
            </NavLink>
        </li>
    </>);
}

export default CountryCard