function findingBadData(arr){
    //checking array or not  
      if(Array.isArray(arr)==true){
  
          let badData=0;
  
          for(let i=0;i<arr.length;i++){
              if(arr[i]<0){
                  badData++;
              }  
          }
  
          return badData;
      }
  
      else
      {
          return 'You must have to enter an array';
      }
  }
  const ar=[3,-5,6,-7,7,8,'4','5'];
  console.log(findingBadData(ar));