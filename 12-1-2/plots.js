//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Plotly.newPlot("myLineChart", [{x: [1,2,4,8,16], y: [2, 10, 20, 22, 50]}]);

//bar chart//////////////////////////////////////////////////
//var trace = {
    //x: ["burrito", "pizza", "chicken"],
    //y: [10, 18, 5],
    //type: "bar"
//};

//var layout = {
    //title: "Luncheon Survey",
    //xaxis: {title: "Food Option"},
    //yaxis: {title: "Number of Respondents"}
//};

//Plotly.newPlot("plotArea", [trace], layout);

//bar chart///////////////////////////////////////////////////////
//var trace = {
    //x: ["na beer", "na wine", "na martini", "na margarita", "iced tea", "na rum and coke", "na mai tai", "na gin and tonic"],
    //y: ["22.7", "17.1", "9.9", "8.7", "7.2", "6.1", "6.0", "4.6"],
    //type: "bar"
//};

//var layout = {
    //title: "Beverage Survey",
    //xaxis: {title: "Beverage Options"},
    //yaxis: {title: "Percantages"}
//};

//Plotly.newPlot("plotArea", [trace], layout);

//pie chart///////////////////////////////////////////////////////
//var trace = {
    //labels: ["na beer", "na wine", "na martini", "na margartia", "iced tea", " na rum and coke", "na mai tai", "na gin and tonic"],
    //values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //type: "pie"
//};

//var data = [trace];

//var layout = {
    //title: "Beverage Survey"
//};

//Plotly.newPlot("plotArea", data, layout);

//scatter plot
var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [5, 4, 3, 2, 1],
    mode: "lines",
    type: "scatter"
};

var trace2 = {
    x: [2, 4, 6, 8],
    y: [1, 2, 3, 4],
    mode: "markers",
    type: "scatter"
};

var trace3 = {
    x: [5, 10, 15],
    y: [10, 6, 12],
    mode: "lines+markers",
    type: "scatter"
};

var data = [trace1, trace2, trace3];

var layout = {
    title: "Random Numbers",
    xaxis: {title: "x axis"},
    yaxis: {title: "y axis"}
};

Plotly.newPlot("plotArea", data, layout);