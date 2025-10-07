function SearchFilter({ search, setSearch, filter, setFilter, countries, setCountries }: any) {
    const handleInputChange = (e: any) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSelectChange = (e: any) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    const sortCountries = (value: "asc" | "des") => {
        const sorted = [...countries].sort((a, b) =>
            value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        );
        setCountries(sorted);
    };

    return (
        <section className="container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 sm:gap-6 px-4 sm:px-10 py-6 bg-[#202020] text-white rounded-xl shadow-md mt-6 space-y-3 sm:space-y-0">

            {/* Search Input */}
            <input
                type="text"
                aria-label="Search countries"
                placeholder="🔍 Search countries..."
                value={search}
                onChange={handleInputChange}
                className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Sorting Buttons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 w-full sm:w-auto">
                <button
                    onClick={() => sortCountries("asc")}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg hover:scale-105 transition-transform text-sm"
                >
                    A → Z
                </button>
                <button
                    onClick={() => sortCountries("des")}
                    className="bg-gradient-to-r from-pink-500 to-red-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform text-sm"
                >
                    Z → A
                </button>
            </div>

            {/* Region Filter */}
            <select
                value={filter}
                aria-label="Filter by region"
                onChange={handleSelectChange}
                className="w-full sm:w-1/3 md:w-1/4 px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="All">🌍 All Regions</option>
                <option value="Africa">🌍 Africa</option>
                <option value="Asia">🌏 Asia</option>
                <option value="Americas">🌎 Americas</option>
                <option value="Europe">🌍 Europe</option>
                <option value="Oceania">🌊 Oceania</option>
            </select>
        </section>
    );
}

export default SearchFilter;