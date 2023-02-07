// ***********************************Problem-1 **********************************

//this fuction only take number as a parameter and give us result of an equation which was asked in the problem and also give  an error message if you type anything else except a positive number

function mindGame(num){
    if(typeof num=='number' && num > 0){
        
        let result=(((num*3)+10)/2)-5;
        return result;
    }
    else{
        return 'You must have to type a positve (is greater than Zero) number';
    }
}


//**************************************Problem-2--********************************

//this funtion always receive only string type parameter and calculate the number of characters. Then give us the output 'Even' and 'Odd', which  depends on the nubers of character are there in that string .If you enter except string with minimum 1 index, it will give you a error messege.

function evenOdd(text){  
   if(typeof text=='string' && text.length>0){

    if(text.length%2==0){
        return 'Even';
    }
    
    else{

        return 'Odd';
    }
    
   }
   else{

    return 'You must have to enter a string with a minimum one index length';

   }
   
}


//**************************************Problem-3--***********************************************

//this function take a number as parameter and give us the difference between that number and 7 if the difference is less than 7.Otherwise it will return double of the givven input.

function isLGSeven(num){

    if(typeof num=='number'){

        let res=num-7;

        if(res<7){

            return res;

        }

        else{

            return num*2;
        }

    }

    else
    {
        return 'You must have to enter a number others type are not accepted';
    }
}




// *********************************** Problem-4----***************************************

function findingBadData(arr){
  //checking array or not  
    if(Array.isArray(arr)==true){

        let count=0;

        for(let i=0;i<arr.length;i++){
            if(arr[i]<0){
                count++;
            }  
        }

        return count;
    }

    else
    {
        return 'You must have to enter an array';
    }
}


//***********************************Problem-5---**************************************

//this function  take three parameters for 1st,2nd and 3rd friends number of gems, and give us  the total as respect to the problems question and also give a error message if user type any thing except number type.  

function gemsToDiamond(n1,n2,n3){
    //non-negative numbers because number of gems can't be negative magnitude
    
    if(typeof n1=='number' && typeof n2=='number' && typeof n3=='number' && n1>=0 && n2>=0 && n3>=0)
    {
        let total=(n1*21)+(n2*32)+(n3*43);

            if(total>2000){
                total=total-2000;
            }

        return total;
    }
    else
    {
        return 'You must have to enter three non-negative numbers. Others type are not accepted';
    }
}

