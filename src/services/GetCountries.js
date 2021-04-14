async function GetCountries() {
  const url = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default GetCountries;
