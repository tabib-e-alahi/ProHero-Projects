// array includes()

const names=['Tabib','Rakin','razim','Malik'];
var isExist= names.includes('tabib');
// console.log(isExist);
var isExist= names.includes('Tabib');
// console.log(isExist);

// ------------------------------------------------------------------------------

// Array concat()

const ar1=[10,20,30,40,50];
const ar2=['a','b','c','d'];

const newArr1=ar2.concat(ar1);
// console.log(newArr1);

const newArr2=ar1.concat(ar2);
// console.log(newArr2);

// ------------------------------------------------------------------------------------

// Array slice and splice 

const ar=[10,20,30,40,50,60,70,80,90,100];
 const arnew=ar.slice(3,7);
//  console.log(arnew);

const arrNew=ar.splice(2,6);
console.log(arrNew);
