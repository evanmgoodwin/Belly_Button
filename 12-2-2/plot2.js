console.log(cityGrowths);

// Sort cities by population

var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

// Select top seven cities by population

var topSevenCities = sortedCities.slice(0,7);

// Create arrays for city names and population figures

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPops = topSevenCities.map(city => parseInt(city.population));

// Create a bar graph

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPops,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Largest Cities by Population",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot("bar-plot", data, layout);
