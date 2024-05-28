PIE = document.getElementById('pieplot1');
// Data pada plot untuk absis-x, dan ordinat-y
var data = [{
labels: ['Kelapa Sawit', 'Kelapa', 'Karet', 'Kopi', 'Kakao', 'Tebu', 'Teh', 'Tembakau'],
values: [15.8, 144.6, 44.7, 53.2, 5.1, 13.9, 78.5, 8],
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