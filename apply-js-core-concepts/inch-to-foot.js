function inchToFoot(inches){
    const feet=inches / 12;
    return feet;
}

const myinches=144;
console.log('My Feet= ',inchToFoot(myinches));