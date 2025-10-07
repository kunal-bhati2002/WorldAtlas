import countryFacts from "../api/countryData.json";

function About() {
    return (
        <section className="container max-w-6xl mx-auto px-4 sm:px-8 my-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-center my-8 leading-snug">
                Here are the Interesting Facts <br /> we're proud of
            </h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-6">
                {countryFacts.map((curCountry) => (
                    <li
                        key={curCountry.id}
                        className="rounded-lg p-6 border border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] text-center sm:text-left hover:scale-[1.02] hover:shadow-[0_0_12px_#00ffff30] transition-all duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-2">{curCountry.countryName}</h2>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Capital:&nbsp;
                            <span className="text-white">{curCountry.capital}</span>
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Population:&nbsp;
                            <span className="text-white">{curCountry.population}</span>
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Interesting Fact:&nbsp;
                            <span className="text-white">{curCountry.interestingFact}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default About;
