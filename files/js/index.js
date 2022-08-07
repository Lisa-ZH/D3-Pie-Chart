//Pie chart
// var data = [
//   {"platform": "Android", "percentage": 40.11}, 
//   {"platform": "Windows", "percentage": 36.69},
//   {"platform": "iOS", "percentage": 13.06}
// ];
// var data = [
//     {"browser": "Chrome", "percent": 73.70}, 
//     {"browser": "IE/Edge", "percent": 4.90},
//     {"browser": "Firefox", "percent": 15.40},
//     {"browser": "Safari", "percent": 3.60},
//     {"browser": "Opera", "percent": 1.00}
//   ];

var data = [
    {"item": "Housing", "spend": 35}, 
    {"item": "Education", "spend": 18},
    {"item": "Food", "spend": 16},
    {"item": "Transportation", "spend": 13},
    {"item": "Insurance", "spend": 10},
    {"item": "Entertainment", "spend": 8}
];

var svgWidth = 400, svgHeight = 250, radius =  Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
.attr("width", svgWidth)
.attr("height", svgHeight);

//Create group element to hold pie chart    
var g = svg.append("g")
.attr("transform", "translate(" + radius + "," + radius + ")");

var color = d3.scaleOrdinal(['#3c99dc','#66d3fa','#f6cd73','#67c6cc','#d5f3fe','#0f5298']);
//var color = d3.scaleOrdinal(d3.schemeTableau10); 
//https://observablehq.com/@d3/color-schemes
//schemeCategory10
//d3.schemeSet3
//d3.schemePastel1

var pie = d3.pie().value(function(d) { 
    return d.spend; 
});

var path = d3.arc()
.outerRadius(radius)
.innerRadius(0);
  
//   var label = d3.arc()
//     .outerRadius(radius)
//     .innerRadius(0);
  
//   d3.csv("browseruse.csv", function(data) {
//     // if (error) {
//     //     throw error;
//     // }
//     var arc = g.selectAll(".arc")
//                .data(pie(data))
//                .enter().append("g")
//                .attr("class", "arc");

//     arc.append("path")
//        .attr("d", path)
//        .attr("fill", function(d) { return color(d.data.browser); });

//     console.log(arc)

//     arc.append("text")
//        .attr("transform", function(d) { 
//                 return "translate(" + label.centroid(d) + ")"; 
//         })
//        .text(function(d) { return d.data.browser; });
//     });

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("stroke", "white")  // white stroke in the middle
    .attr("fill", function(d) { return color(d.data.spend); });
        
arc.append("text")
    .attr("transform", function(d) { 
        return "translate(" + label.centroid(d) + ")"; 
    })
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.item+":"+d.data.spend+"%"; });
