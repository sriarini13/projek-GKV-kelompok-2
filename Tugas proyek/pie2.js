PIE = document.getElementById('pieplot2');
// Data pada plot untuk absis-x, dan ordinat-y
var data = [{
labels: ['Kelapa Sawit', 'Kelapa', 'Karet', 'Kopi', 'Kakao', 'Tebu', 'Teh', 'Tembakau'],
values: [2869.3, 437.8, 240.4, 4.3, 3.5, 0, 0, 0],
type: 'pie',
marker: {
    colors: [
        '#642915',  
        '#c7522a',
        '#d68a58',
        '#e5c185',
        '#74a892',
        '#008585',
        '#80c2c2',
        '#c0e1e1'  
    ]
}
}];
var layout= {font: {size: 18}};
var config = {responsive: true};
Plotly.newPlot (PIE, data, layout, config);