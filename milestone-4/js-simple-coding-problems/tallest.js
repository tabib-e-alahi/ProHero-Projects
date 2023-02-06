function maxInArray(numbers){
    let largest=numbers[0];
    
for(let i=0;i<numbers.length;i++){

   const index=i;

   const element=numbers[index];

   if(element>largest){
    largest=element;
   }
}
return largest;
}

const height=[160,190,167,120,165,115];
const tallest=maxInArray(height);
console.log(tallest);