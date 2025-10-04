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
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        });
    }, []);

    if (isPending || !country)
        return <h1 className="text-3xl md:text-5xl text-center m-6">Loading...</h1>;

    return (
        <>
            <section className="container mx-auto px-6 md:px-12 py-10">
                {/* Back button */}
                <div className="mb-6">
                    <NavLink
                        to="/country"
                        className="px-4 py-2 bg-[#202020] text-white rounded-lg shadow-md hover:bg-gray-800 transition"
                    >
                        ← Back
                    </NavLink>
                </div>

                {/* Grid for responsive layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10 rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[hsl(285,29%,3%)]">
                    {/* Flag */}
                    <div className="flex justify-center items-center">
                        <img
                            src={country.flags.png}
                            alt={country.name.common}
                            className="w-full max-w-[400px] rounded-lg shadow-md"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
                            Region:{" "}
                            <span className="text-white font-medium">{country.region}</span>
                        </p>

                        <p className="text-gray-400">
                            Capital:{" "}
                            <span className="text-white font-medium">
                                {country.capital?.join(", ")}
                            </span>
                        </p>

                        <p className="text-gray-400">
                            Top Level Domain:{" "}
                            <span className="text-white font-medium">
                                {country.tld.join(", ")}
                            </span>
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
                            <span className="text-white font-medium">
                                {Object.values(country.languages).join(", ")}
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CountryDetails;



// import { useEffect, useState, useTransition } from "react";
// import { useParams } from "react-router-dom";
// import { getCountryIndData } from "../../api/postApi";

// function CountryDetails() {
//     const param = useParams();
//     const [isPending, startTransition] = useTransition();
//     const [country, setCountry] = useState<any>(null);

//     useEffect(() => {
//         startTransition(async () => {
//             const res = await getCountryIndData(param.id);
//             if (res.status === 200) {
//                 setCountry(res.data[0]);
//             }
//         })
//     }, []);

//     if (isPending || !country) return <h1 className="text-5xl text-center m-6">Loading</h1>

//     return (<>
//         <section className="container mx-auto grid grid-cols-1 p-10">
//             <div>
//                 <img src={country.flags.png} alt={country.name.common} />
//             </div>
//             <div>
//                 <h2 className="text-3xl font-bold">{country.name.official}</h2>

//                 <p className="text-gray-400">
//                     Native Names :&nbsp;
//                     <span className="text-white">
//                         {Object.values(country.name.nativeName)
//                             .map(n => n.common)
//                             .join(", ")}
//                     </span>
//                 </p>

//                 <p className="text-gray-400">
//                     Population :&nbsp;
//                     <span className="text-white">{country.population.toLocaleString()}</span>
//                 </p>

//                 <p className="text-gray-400">
//                     Region :&nbsp;
//                     <span className="text-white">{country.region}</span>
//                 </p>

//                 <p className="text-gray-400">
//                     Capital :&nbsp;
//                     <span className="text-white">{country.capital?.join(", ")}</span>
//                 </p>

//                 <p className="text-gray-400">
//                     Top Level Domain :&nbsp;
//                     <span className="text-white">{country.tld.join(", ")}</span>
//                 </p>

//                 <p className="text-gray-400">
//                     Currencies :&nbsp;
//                     <span className="text-white">
//                         {Object.values(country.currencies)
//                             .map(c => `${c.name} (${c.symbol})`)
//                             .join(", ")}
//                     </span>
//                 </p>

//                 <p className="text-gray-400">
//                     Languages :&nbsp;
//                     <span className="text-white">
//                         {Object.values(country.languages).join(", ")}
//                     </span>
//                 </p>
//             </div>

//             {/* <div>
//                 <h2 className="text-3xl font-bold">{country.name.official}</h2>

//                 <p className="text-gray-400">
//                     Native Names :&nbsp;
//                     <span className="text-white">
//                         {country.nativeName}
//                     </span>
//                 </p>
//                 <p className="text-gray-400">
//                     Population :&nbsp;
//                     <span className="text-white">
//                         {country.population}
//                     </span>
//                 </p>
//                 <p className="text-gray-400">
//                     Region :&nbsp;
//                     <span className="text-white">
//                         {country.region}</span>
//                 </p>
//                 <p className="text-gray-400">
//                     Capital :&nbsp;
//                     <span className="text-white">
//                         {country.capital}
//                     </span>
//                 </p>
//                 <p className="text-gray-400">
//                     Top Level Domain :&nbsp;
//                     <span className="text-white">
//                         {country.tld}
//                     </span>
//                 </p>
//                 <p className="text-gray-400">
//                     Currencies :&nbsp;
//                     <span className="text-white">
//                         {country.currencies.name}
//                     </span>
//                 </p>
//                 <p className="text-gray-400">
//                     Languages :&nbsp;
//                     <span className="text-white">
//                         {country.languages.hin}
//                     </span>
//                 </p>
//             </div> */}
//         </section>
//     </>);
// }

// export default CountryDetails