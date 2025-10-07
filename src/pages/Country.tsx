import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/layouts/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

function Country() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        });
    }, []);

    if (isPending)
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <span className="text-xl font-semibold animate-pulse text-indigo-500">
                    Loading countries...
                </span>
            </div>
        );

    const searchCountry = (country: any) =>
        !search || country.name.common.toLowerCase().includes(search.toLowerCase());

    const filterByRegion = (country: any) =>
        filter === "All" || country.region === filter;

    const filteredCountries = countries.filter(searchCountry).filter(filterByRegion);

    return (
        <section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />

            <h1 className="text-center text-3xl sm:text-4xl font-bold my-8 text-indigo-500">
                Countries
            </h1>
            <hr className="border-gray-700 mx-auto w-3/4 mb-6" />

            {filteredCountries.length === 0 ? (
                <p className="text-center text-gray-400 my-10">
                    No countries found matching your criteria.
                </p>
            ) : (
                <ul className="grid grid-cols-1 gap-8 p-4 sm:px-8 md:px-12 lg:px-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredCountries.map((item: any) => (
                        <CountryCard country={item} key={item.name.official} />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Country;
