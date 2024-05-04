import { useState, useEffect } from "react";
import ThemeSwitcher from "../componants/ThemeSwitcher";

const SingleCountry = () => {
  const name = "italy";
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data[0]);
    };
    getData();
  }, []);
  console.log(country);
  return (
    <div className="">
      <ThemeSwitcher />
      <div className="px-12">
      <div className="py-12 flex items-center">
                
      <button className="shadow-xl rounded-md p-1 flex items-center px-4"><img className="h-4" src="assets/images/arrow-back-outline.svg" alt="" />Back</button>
      </div>
      {country ? (
        <div className="grid grid-cols-2 items-center">
          <div className="h-80">
            {" "}
            <img src={country.flags.svg} alt={country.name.common} />{" "}
          </div>
          <div>

          <div className="description">
            <h1> {country.name.common} </h1>
          </div>
          <div className="grid grid-cols-2">
            <div>
            <h2>Native Name: <label htmlFor="">{country.name.nativeName.ita.common}</label></h2>
            <h2>Population: <label htmlFor="">{country.population}</label></h2>
            <h2>Region: <label htmlFor="">{country.region}</label></h2>
            <h2>Sub Region: <label htmlFor="">{country.subregion}</label></h2>
            <h2>Capital: <label htmlFor="">{country.capital}</label></h2>
          </div>
          <div>
            <h2>Top Level Domain: <label htmlFor="">{country.tld}</label></h2>
            <h2>Currencies: <label htmlFor="">{country.currencies.EUR.name}</label></h2>
            <h2>Languages: <label htmlFor="">{country.languages.ita}</label></h2>
          </div>
          </div>
          <div className="flex mt-8 gap-2">
          <h2>Border Counties: </h2>
          {country.borders.map((e,i)=><button key={i} className="shadow-xl mx-2 py-1 rounded-lg w-full">{e}</button>)}
          </div>
          </div>
        </div>
      ) : (
        <h1>loadiing.............</h1>
      )}
      </div>
    </div>
  );
};

export default SingleCountry;
