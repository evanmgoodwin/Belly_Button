const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude));

d3.json(url).then(receivedData => console.log(receivedData.map(function(city){
    return city.location.latitude
})));

d3.json(url).then(receivedData => console.log(receivedData.map(function(city){
    return city.location.longitude
})));