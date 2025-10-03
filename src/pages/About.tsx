import countryFacts from "../api/countryData.json"

function About() {
    return (<>
        <section className="container mx-auto">
            <h1 className="text-2xl text-center my-6">
                Here are the Intresting Facts
                <br />
                we're proud of
            </h1>
            <div>
                <ul className="grid grid-cols-1 gap-4 p-4 sm:p-6 sm:grid-cols-2 sm:px-16 lg:grid-cols-3">
                    {
                        countryFacts.map((curCountry) => {
                            return (
                                <li
                                    key={curCountry.id}
                                    className="rounded-lg p-6 border border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509]"
                                >
                                    <h2 className="text-xl font-semibold">{curCountry.countryName}</h2>
                                    <p className="text-gray-400">Capital :
                                        <span className="text-white">
                                            {curCountry.capital}
                                        </span>
                                    </p>
                                    <p className="text-gray-400">Population :
                                        <span className="text-white">
                                            {curCountry.population}
                                        </span>
                                    </p>
                                    <p className="text-gray-400">Interesting Fact :
                                        <span className="text-white">
                                            {curCountry.interestingFact}
                                        </span>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    </>);
}

export default About