// option-2: add on click funtion--commonly used 
function makeRed(){
    document.body.style.backgroundColor='red';
}

// option-3 funtion 
const blueButton=document.getElementById('blue-btn');

blueButton.onclick=makeBlue;//only funtion name ta likhte hobe, function call kora jabe na

function makeBlue(){
    document.body.style.backgroundColor='blue';
}


// option-4 addEventListener 
const pinkButton=document.getElementById('pink-btn');

pinkButton.addEventListener('click',makePink);//only funtion name ta likhte hobe, function call kora jabe na

function makePink(){
    document.body.style.backgroundColor='pink';
}

//option-4 addEventListener final
// we will use this 
document.getElementById('green-btn').addEventListener('click',function(){
    document.body.style.backgroundColor='green';
})
