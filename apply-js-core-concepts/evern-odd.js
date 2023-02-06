function evenOdd(num){
    if(num%2==0 && num!=0){
        return true;
    }
    else if(num%2 !=0 && num!=0){
        return false;
    }
    else{
        const n='The Number is Zero';
        return n;
    }
}
console.log(evenOdd(5));

//what will be the output

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//   }
//   console.log(print(1,2,3));

