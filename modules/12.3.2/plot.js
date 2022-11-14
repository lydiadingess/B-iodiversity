// Classic Hello to see that it is working
// d3.json("samples.json").then(function(data){
//   console.log("hello");
// });

// Now import some data
// d3.json("samples.json").then(function(data){
//   console.log(data);
// });

// Extract some data
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person => person.wfreq);
//   console.log(wfreq);
// });

// Sort and extract some data
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//   console.log(wfreq);
// });

// delete null values, sort, extract data
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//   filteredWfreq = wfreq.filter(element => element !=
// null);
//   console.log(filteredWfreq);
// });

// NOTE: How to call objects from data
// researcher1 = {
//   name: 'Roza',
//   age: 34,
//   hobby: 'Hiking'
// };
// console.log(Object.entries(researcher1));


// Practicing For Each loops
researcher1 = [['name', 'Roza'], ['age', 34], ['hobby', 'Hiking']];
researcher1.forEach(([first, second]) => console.log(first + ": " + second));

// Using object.entries
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});