"use strict"

console.log("hi");

window.onload = function() {
  //var container = document.getElementById('mynetwork');
  //var names = ['ASSAULT', 'NON-CRIMINAL', 'MISSING-PERSON', 'WARRANTS', 'LARCENY/THEFT'];
  var container = document.getElementById('visualization');
  var groups = new vis.DataSet();
  // var button = document.getElementById('crime');
  // button.addEventListener('click', function(event){
  //   ajax()
  // })
  //
  // function ajax(){
  //   $.ajax({
  //         url:  `localhost:3000/burglary`,
  //         method: "GET"
  //       })
  //       .done(function(data){
  //         console.log("this request worked");
  //           console.log(data)
  //       })
  //   }


  groups.add({id: 0, content: "BURGLARY"})
  groups.add({id: 1, content: "LARCENY/THEFT"})
  groups.add({id: 2, content: "VEHICLE THEFT "})

  var burlargyData = {"1":12,"2":8,"3":11,"4":19,"5":31,"6":19,"7":18};
  var larceny =  {"1":88,"2":69,"3":50,"4":83,"5":170,"6":89,"7":90};
  var vehicleTheft = {"1":37,"2":51,"3":42,"4":55,"5":62,"6":62,"7":44};

  var items = [
      {x: '2016-10-02', y: 12, group:0, label: {content: 12, xOffset: -25}},
      {x: '2016-10-03', y: 8, group:0, label: {content: 8, xOffset: -25}},
      {x: '2016-10-04', y: 11, group:0, label: {content: 11, xOffset: -25}},
      {x: '2016-10-05', y: 19, group:0, label: {content: 19, xOffset: -25}},
      {x: '2016-10-06', y: 31, group:0, label: {content: 31, xOffset: -25}},
      {x: '2016-10-07', y: 19, group:0, label: {content: 19, xOffset: -25}},
      {x: '2016-10-08', y: 18, group:0, label: {content: 18, xOffset: -25}},
      {x: '2016-10-02', y: 88, group:1, label: {content: 88, xOffset: -25}},
      {x: '2016-10-03', y: 69, group:1, label: {content: 69, xOffset: -25}},
      {x: '2016-10-04', y: 50, group:1, label: {content: 50, xOffset: -25}},
      {x: '2016-10-05', y: 83, group:1, label: {content: 83, xOffset: -25}},
      {x: '2016-10-06', y: 170, group:1, label: {content: 170, xOffset: -25}},
      {x: '2016-10-07', y: 89, group:1, label: {content: 89, xOffset: -25}},
      {x: '2016-10-08', y: 90, group:1, label: {content: 90, xOffset: -25}},
      {x: '2016-10-02', y: 37, group:2, label: {content: 37, xOffset: -25}},
      {x: '2016-10-03', y: 51, group:2, label: {content: 51, xOffset: -25}},
      {x: '2016-10-04', y: 42, group:2, label: {content: 42, xOffset: -25}},
      {x: '2016-10-05', y: 55, group:2, label: {content: 55, xOffset: -25}},
      {x: '2016-10-06', y: 62, group:2, label: {content: 62, xOffset: -25}},
      {x: '2016-10-07', y: 62, group:2, label: {content: 62, xOffset: -25}},
      {x: '2016-10-08', y: 44, group:2, label: {content: 44, xOffset: -25}}
  ];



  // parseData(data)
  // function parseData(data){
  //   var itemsTest = []
  //   var counter = 0;
  //   for (var i = 0; i < data.length; i++) {
  //     if (data[i].dayofweek === "Sunday"){
  //       items[0].y ++;
  //       console.log(items[0].y);
  //       }
  //     else if (data[i].dayofweek === "Monday"){
  //       items[1].y ++;
  //         }
  //   }
  //
  //   }



  var dataset = new vis.DataSet(items);
  var options = {
      style:'bar',
      stack:true,
      drawPoints: {
        size: 0,
    },
      barChart: {width:50, align:'center', sideBySide:true}, // align: left, center, right
      //drawPoints: false,
      dataAxis: {
          icons:true
      },
      orientation:'bottom',
      start: '2016-10-02',
      end: '2016-10-08',
      yMax: 280
  };
  var graph2d = new vis.Graph2d(container, items, groups, options);

  var dropdown = document.getElementById("dropdownID");
  dropdown.onchange = update;

  function update() {
      var options = {stack:dropdown.value === 'stack', barChart:{sideBySide:dropdown.value === 'sideBySide'}};
      graph2d.setOptions(options);
  }

};
