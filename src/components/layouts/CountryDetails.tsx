import { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";

function CountryDetails() {
    const param = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState<any>(null);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(param.id);
            if (res.status === 200) setCountry(res.data[0]);
        });
    }, []);

    if (isPending || !country)
        return (
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-center my-6">
                Loading...
            </h1>
        );

    return (
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10">
            {/* Back button */}
            <div className="mb-6">
                <NavLink
                    to="/country"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#202020] text-white rounded-lg shadow-md hover:bg-gray-800 transition"
                >
                    ← Back
                </NavLink>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-6 md:p-10 rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[hsl(285,29%,3%)]">
                {/* Flag */}
                <div className="flex justify-center items-start">
                    <img
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                        className="w-full h-auto max-w-[400px] rounded-lg shadow-md object-cover"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-3 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        {country.name.official}
                    </h2>

                    <p className="text-gray-400">
                        Native Names:{" "}
                        <span className="text-white font-medium">
                            {Object.values(country.name.nativeName)
                                .map((n: any) => n.common)
                                .join(", ")}
                        </span>
                    </p>
                    <p className="text-gray-400">
                        Population:{" "}
                        <span className="text-white font-medium">
                            {country.population.toLocaleString()}
                        </span>
                    </p>
                    <p className="text-gray-400">
                        Region: <span className="text-white font-medium">{country.region}</span>
                    </p>
                    <p className="text-gray-400">
                        Capital:{" "}
                        <span className="text-white font-medium">{country.capital?.join(", ")}</span>
                    </p>
                    <p className="text-gray-400">
                        Top Level Domain:{" "}
                        <span className="text-white font-medium">{country.tld.join(", ")}</span>
                    </p>
                    <p className="text-gray-400">
                        Currencies:{" "}
                        <span className="text-white font-medium">
                            {Object.values(country.currencies)
                                .map((c: any) => `${c.name} (${c.symbol})`)
                                .join(", ")}
                        </span>
                    </p>
                    <p className="text-gray-400">
                        Languages:{" "}
                        <span className="text-white font-medium">{Object.values(country.languages).join(", ")}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CountryDetails;