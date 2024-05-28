BAR = document.getElementById('barplot');

var data = {
    'Provinsi': ['ACEH', 'SUMATERA UTARA', 'SUMATERA BARAT', 'RIAU', 'JAMBI', 'SUMATERA SELATAN', 'BENGKULU', 'LAMPUNG', 'KEP. BANGKA BELITUNG', 'KEP. RIAU', 'DKI JAKARTA', 'JAWA BARAT', 'JAWA TENGAH', 'DI YOGYAKARTA', 'JAWA TIMUR', 'BANTEN', 'BALI', 'NUSA TENGGARA BARAT', 'NUSA TENGGARA TIMUR', 'KALIMANTAN BARAT', 'KALIMANTAN TENGAH', 'KALIMANTAN SELATAN', 'KALIMANTAN TIMUR', 'KALIMANTAN UTARA', 'SULAWESI UTARA', 'SULAWESI TENGAH', 'SULAWESI SELATAN', 'SULAWESI TENGGARA', 'GORONTALO', 'SULAWESI BARAT', 'MALUKU', 'MALUKU UTARA', 'PAPUA BARAT', 'PAPUA BARAT DAYA', 'PAPUA', 'PAPUA SELATAN', 'PAPUA TENGAH', 'PAPUA PEGUNUNGAN'],
    'Kelapa Sawit': [478.1, 1371.9, 444.1, 2869.3, 1062.4, 1162.7, 416.9, 199.5, 250.8, 7.6, 0, 15.8, 0, 0, 0, 18.2, 0, 0, 0, 2200.8, 2196.3, 516.7, 1328.5, 242.4, 0, 0, 53.1, 62, 15.4, 147.3, 10.2, 5.6, 73.3, 0, 143.6, 0, 0, 0],
    'Kelapa': [102.6, 111.4, 85.3, 437.8, 115.6, 69.3, 8.8, 89.7, 8.6, 33.5, 0, 144.6, 200.1, 38.8, 228.4, 74.6, 70.1, 58, 136.3, 94.2, 37.1, 36.7, 20.1, 1.3, 273.4, 218.1, 91.5, 61.7, 71.3, 43.1, 116.8, 204, 22.9, 0, 25.7, 0, 0, 0],
    'Karet': [100, 373.1, 130.7, 240.4, 408.5, 883.3, 101.8, 174.5, 45.8, 23.6, 0, 44.7, 28.4, 0.1, 19, 15.5, 0, 0, 0, 326.4, 312.8, 208.9, 76.2, 2.6, 0, 0, 8.5, 0.8, 0, 0, 0, 6.2, 0, 0, 0, 0, 0, 0, 0],
    'Kopi': [114, 98.6, 23.8, 4.3, 31.5, 267.2, 91.2, 155.2, 0.3, 0, 0, 53.2, 49, 1.8, 91.4, 6.2, 33.8, 13.9, 76.8, 7.5, 2.1, 2.2, 1.4, 1, 7.7, 11.3, 79.4, 9.6, 1.3, 16.5, 1.3, 0.4, 0.3, 0, 14.7, 0, 0, 0, 0],
    'Kakao': [93.4, 53.4, 64.8, 3.5, 2.5, 10, 5.6, 77, 0.6, 0, 0, 5.1, 4.6, 4.9, 39, 7.6, 13.6, 7.7, 63.4, 4.2, 3, 0.4, 7.8, 2.5, 0, 16, 175.5, 225.4, 13, 142, 24.2, 22.3, 11.2, 0, 32.9, 0, 0, 0, 0],
    'Tebu': [0, 7.6, 0, 0, 0, 31.6, 0, 141.2, 0, 0, 0, 13.9, 48.8, 2.3, 227, 0, 0, 3.8, 2.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 504.8],
    'Teh': [0, 3.5, 2.9, 0, 1.8, 1.5, 0.9, 0, 0, 0, 0, 78.5, 8.9, 0.1, 1.6, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99.8],
    'Tembakau': [2.3, 1.9, 0.1, 0, 0.3, 0.1, 0, 0.5, 0, 0, 0, 8, 50, 0.4, 90.6, 0, 0.3, 34.3, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 191.8]
};

// Mendefinisikan nama kolom
var columns = Object.keys(data).slice(1); // Kolom kecuali 'Provinsi'

// Daftar warna dalam format hexcode
var customColors = [
    '#642915',  
    '#c7522a',
    '#d68a58',
    '#e5c185',
    '#74a892',
    '#008585',
    '#80c2c2',
    '#c0e1e1'  
];

// Menyiapkan data untuk plot
var plotData = columns.map(function(column, i) {
    return {
        x: data['Provinsi'],
        y: data[column],
        type: 'bar',
        marker: {
            color: customColors[i % customColors.length] // Menggunakan warna dari palet secara bergantian
        },
        name: column
    };
});

// Membuat layout plot
var layout = {
    barmode: 'stack',
};

// Membuat plot menggunakan Plotly
Plotly.newPlot('barplot', plotData, layout);


