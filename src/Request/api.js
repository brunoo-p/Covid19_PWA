const path = 'https://coronavirus-19-api.herokuapp.com/countries'
const pathStates = 'https://covid19-brazil-api.now.sh/api/report/v1/'

const headers = {
  method: "get",
  mode: "cors",
  cache: "default"
}

function getCountry(country) {
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

function getStates() {
  return fetch(`${pathStates}`, headers)
    .then((response) => response.json())
}
/* 


async function getStates(){
  const response = await fetch(`${pathStates}`, headers);
  const json = await response.json();
  return json;
} */


export default {getCountry, getStates}