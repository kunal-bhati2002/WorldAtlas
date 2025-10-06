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
        })
    }, []);

    if (isPending) return <h1>Loading</h1>

    // 🔍 Search function
    const searchCountry = (country: any) => {
        if (!search) return true; // if no search, include all
        return country.name.common.toLowerCase().includes(search.toLowerCase());
    };

    // 🌍 Filter function
    const filterByRegion = (country: any) => {
        if (filter === "All") return true;
        return country.region === filter;
    };

    // ✅ Combine both filters
    const filteredCountries = countries
        .filter(searchCountry)
        .filter(filterByRegion);
        
    return (<>
        <section className="container mx-auto">

            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />

            <h1 className="text-center text-4xl font-bold my-8">Country</h1>
            <ul className="grid grid-cols-1 gap-6 p-4 sm:p-6 sm:grid-cols-2 sm:px-16 lg:grid-cols-3">
                {
                    filteredCountries.map((item: { name: any, flags: any, population: any, region: any, capital: any }) => {
                        return <CountryCard country={item} key={item.name.official} />
                    })
                }
            </ul>
        </section>
    </>);
}

export default Country