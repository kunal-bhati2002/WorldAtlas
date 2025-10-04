import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/layouts/CountryCard";

function Country() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        })
    }, []);

    if (isPending) return <h1>Loading</h1>

    return (<>
        <section className="container mx-auto">
            <h1 className="text-center text-4xl font-bold my-8">Country</h1>
            <ul className="grid grid-cols-1 gap-6 p-4 sm:p-6 sm:grid-cols-2 sm:px-16 lg:grid-cols-3">
                {
                    countries.map((item: { name: any, flags: any, population: any, region: any, capital: any }) => {
                        return <CountryCard country={item} key={item.name.official} />
                    })
                }
            </ul>
        </section>
    </>);
}

export default Country