"use strict"

console.log("hi");

window.onload = function() {
  //var container = document.getElementById('mynetwork');
  //var names = ['ASSAULT', 'NON-CRIMINAL', 'MISSING-PERSON', 'WARRANTS', 'LARCENY/THEFT'];
  var container = document.getElementById('visualization');
  var groups = new vis.DataSet();
  groups.add({id: 0, content: "ASSAULT"})
  groups.add({id: 1, content: "NON-CRIMINAL"})
  groups.add({id: 2, content: "MISSING-PERSON"})

  var items = [
      {x: '1', y: 10, group:0},
      {x: '2', y: 25, group:0},
      {x: '3', y: 30, group:0},
      {x: '4', y: 10, group:0},
      {x: '5', y: 15, group:0},
      {x: '6', y: 30, group:0},
      {x: '7', y: 12, group:1},
      {x: '1', y: 15, group:1},
      {x: '2', y: 34, group:1},
      {x: '3', y: 24, group:1},
      {x: '4', y: 5,  group:1},
      {x: '5', y: 12, group:1},
      {x: '6', y: 22, group:1},
      {x: '7', y: 14, group:1},
      {x: '1', y: 15, group:2},
      {x: '2', y: 34, group:2},
      {x: '3', y: 24, group:2},
      {x: '4', y: 5,  group:2},
      {x: '5', y: 12, group:2},
      {x: '6', y: 12, group:2},
      {x: '7', y: 24, group:2}
  ];

  var dataset = new vis.DataSet(items);
  var options = {
      style:'bar',
      stack:true,
      barChart: {width:50, align:'center', sideBySide:true}, // align: left, center, right
      drawPoints: false,
      dataAxis: {
          icons:true
      },
      orientation:'bottom',
      start: '1',
      end: '7'
  };
  var graph2d = new vis.Graph2d(container, items, groups, options);

  var dropdown = document.getElementById("dropdownID");
  dropdown.onchange = update;

  function update() {
      var options = {stack:dropdown.value === 'stack', barChart:{sideBySide:dropdown.value === 'sideBySide'}};
      graph2d.setOptions(options);
  }

};
