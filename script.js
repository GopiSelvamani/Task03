function areEqual(obj1, obj2) {
    // Convert objects are sorted property used. 
    const stringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const stringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    return stringifiedObj1 === stringifiedObj2;
  }

  const json1 = { name: "Person1", age: 5 };
  const json2 = { age: 5, name: "Person1" };
  
  console.log(areEqual(json1, json2)); 
  
  
  //  API url used all display all the country flags.
  
  const displayCountryFlags = (url) => {
    var data = new XMLHttpRequest(); 
    data.open("GET", url);
    data.send();
    data.onload = function () {
      let countries = JSON.parse(data.response);
      for (let i = 0; i < countries.length; i++) console.log(countries[i].flag);
    };
  };
  displayCountryFlags("https://restcountries.com/v3.1/all");
  
   // Use the same rest countries and print all countries names,region,sub-region and population. 
  const displayNamesRegionsPopulations = (url) => {
    var data = new XMLHttpRequest(); 
    data.open("GET", url);
    data.send();
    data.onload = function () {
      let countries = JSON.parse(data.response);
      for (let i = 0; i < countries.length; i++)
        console.log({
          names: countries[i].name,
          region: countries[i].region,
          subregion: countries[i].subregion,
          population: countries[i].population,
        });
    };
  };
  
  displayNamesRegionsPopulations("https://restcountries.com/v3.1/all");