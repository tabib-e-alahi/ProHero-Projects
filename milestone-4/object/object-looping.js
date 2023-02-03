var students = {
    id: 115,
    name: 'Tabib',
    class: 8,
    marks: 97,
    grade: 'A+',
    position: '2nd',
    section: 'Day'
};



var keys=Object.keys(students);
var keyValues=Object.values(students);
// console.log(keys);
// console.log(keyValues);

// for(var i=0;i<keys.length;i++)
// {
//     // console.log(keys[i],'=',keyValues[i]);
//     // or ,
//     var propertyName=keys[i];
//     var propertyValue=students[propertyName];
//     console.log(propertyName,propertyValue);
 
// }

// by " for in " loop 
// for(var propertyName in students){
//     const value=students[propertyName];
//     console.log(propertyName,value);
// }

