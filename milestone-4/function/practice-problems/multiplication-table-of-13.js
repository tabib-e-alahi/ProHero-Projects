// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function multi(num){
    for(var i=1;i<=10;i++){
        mul=num*i;
        console.log(num,'*',i,'=',mul);
    }
}
multi(13);