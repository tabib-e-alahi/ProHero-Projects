// object decleration 

var students={id:115,
    name:'Tabib',
    class:8,
    marks:97
}
console.log(students);


//get properties name and their values

var properties=Object.keys(students);
var propertiesValues=Object.values(students);
// console.log(properties);
// console.log(propertiesValues);

// set values 
students.marks=35;
students['name']='Alahi';

console.log(students);