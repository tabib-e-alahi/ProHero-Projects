// function sum_of_array(array){
//     let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=ar[i];
// }
// return sum;
// }

function getOdd_of_array(odd){
// const oddArr=[];
    for(let i=0;i<odd.length;i++){
        if(odd[i]%2 != 0){
            // oddArr.push(odd[i]);
            console.log(odd[i]);
        }
        
    }
    // sum_of_array(oddArr);
}





var ar=[1,2,3,4,5,6,7,8,9,10];
// console.log('Sum= ',sum_of_array(ar));
console.log(getOdd_of_array(ar));