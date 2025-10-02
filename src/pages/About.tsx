import countryFacts from "../api/countryData.json"

function About() {
    return (<>
        <section className="container mx-auto">
            <h1 className="text-md text-center my-6">
                Here are the Intresting Facts
                <br />
                we're proud of
            </h1>
            <div className="grid grid-cols-3">
                <ul>
                    {
                        countryFacts.map((curCountry) => {
                            return (
                                <li key={curCountry.id}>
                                    <h2>{curCountry.countryName}</h2>
                                    <p>Capital :
                                        <span>
                                            {curCountry.capital}
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