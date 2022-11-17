// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 

   // 1. Create the trace for the bubble chart.

   var trace2 = {
    x: Ids,
    y: sampleValues,
    mode: 'markers',
    hovertext: Labels,
    marker: {
      color: Ids,
      size: sampleValues,
      colorscale: "Earth"
    }
  };

  var bubbleData = [trace2];

  // 2. Create the layout for the bubble chart.
  var bubbleLayout = {
    title: "<b>Bacteria Cultures Per Sample</b>",
    xaxis:{title: "OTU ID"},
    hovermode: 'closest',
    width:1145
  };

  // D2: 3. Use Plotly to plot the data with the layout.

  Plotly.newPlot('bubble',bubbleData, bubbleLayout);

  // D3: 4. Create the trace for the gauge chart.

  //create a variable that converts the washing frequency to a floating point number.
  var metadata = data.metadata;
  var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  var result = resultArray[0];
  var wFreq = result.wfreq;

 
  var trace3 = {
    
    type: "indicator",
    mode: "gauge+number",
    value: wFreq,
    title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week"},
    gauge: {
      axis: {range: [0,10],tickwidth: 3, tickcolor: "black"},
      bar: {color: "black"},
      steps: [
        { range: [0, 2], color: "wheat" },
        { range: [2, 4], color: "goldenrod" },
        { range: [4, 6], color: "palegreen" },
        { range: [6, 8], color: "lightseagreen" },
        { range: [8, 10], color: "darkslateblue" },
      ],
    }
     }
  var gaugeData = [trace3];

  // 5. Create the layout for the gauge chart.
  var gaugeLayout = { 
    width: 460, 
    height: 400, 
    margin: { t: 0, b: 0 } };

  // 6. Use Plotly to plot the gauge data and layout.
  Plotly.newPlot('gauge',gaugeData, gaugeLayout);

  });
}
