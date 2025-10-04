import axios from "axios";

const API = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// get data

export const getCountryData = () => {
    return API.get("/all?fields=id,name,population,region,capital,flags");
};

// get individual country name

export const getCountryIndData = (name: any) => {
    return API.get(
        `/name/${name}?fullText=true&fields=name,population,capital,region,subregion,tld,currencies,languages,borders,flags`
    );
};
