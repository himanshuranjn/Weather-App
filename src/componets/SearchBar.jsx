import { useState } from "react";
import SearchResultslist from './searchResultslist'

const SearchBar = ({getWeather,geoWeather}) => {
    const [inputList,setInputList] = useState("");
  const handleInput = (event) => {
    setInputList(event.target.value);
  }
  const handleClick = (data) => {
    getLocation(data)
} 

  const getLocation = (location) => {
    getWeather(location)
    setInputList("")
  }



    return (<>

<div className="heading">
     <h3>Weather App</h3>
     <div className='github-icon'><a href="https://github.com/bilal-08/weather-app"><svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.74 0 0 10.7822 0 24.0944C0 34.7562 6.87 43.7615 16.41 46.954C17.61 47.1648 18.06 46.442 18.06 45.8095C18.06 45.2372 18.03 43.3398 18.03 41.3219C12 42.4363 10.44 39.8461 9.96 38.4908C9.69 37.7981 8.52 35.6597 7.5 35.0875C6.66 34.6357 5.46 33.5213 7.47 33.4912C9.36 33.4611 10.71 35.2381 11.16 35.9609C13.32 39.6052 16.77 38.5812 18.15 37.9487C18.36 36.3825 18.99 35.3284 19.68 34.7261C14.34 34.1237 8.76 32.0456 8.76 22.8294C8.76 20.2092 9.69 18.0407 11.22 16.3541C10.98 15.7517 10.14 13.282 11.46 9.96906C11.46 9.96906 13.47 9.33658 18.06 12.4387C19.98 11.8966 22.02 11.6256 24.06 11.6256C26.1 11.6256 28.14 11.8966 30.06 12.4387C34.65 9.30646 36.66 9.96906 36.66 9.96906C37.98 13.282 37.14 15.7517 36.9 16.3541C38.43 18.0407 39.36 20.1791 39.36 22.8294C39.36 32.0757 33.75 34.1237 28.41 34.7261C29.28 35.479 30.03 36.9247 30.03 39.1835C30.03 42.4062 30 44.9963 30 45.8095C30 46.442 30.45 47.1949 31.65 46.954C36.4144 45.3391 40.5544 42.265 43.4873 38.1643C46.4203 34.0636 47.9986 29.1428 48 24.0944C48 10.7822 37.26 0 24 0Z" fill="black"/>

</svg></a>
</div>
     </div>

     <div className="search-bar">
      <div className='search-icon'></div>
      <input type="text" className='input-field' value={inputList} placeholder='Search for location' onChange={handleInput} />
      <div className='location-icon' onClick={geoWeather}></div>
     </div>
     <div className='result-box'> 
     <SearchResultslist weatherLocation={getLocation} data={{inputList}} setList={setInputList} handleClick={handleClick} />
     </div>


    </>)
}

export default SearchBar;