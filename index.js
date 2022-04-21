// Code your solution in this file!
function distanceFromHqInBlocks(passLocation) {
    if (passLocation> 42){
        return passLocation-42;
    }else {return 42-passLocation}
}

function distanceFromHqInFeet(passLocation) {
    if (passLocation> 42){
        return (passLocation-42)*264;
    }else {return (42-passLocation)*264}
}

function distanceTravelledInFeet( start, destination){
    if (start > destination){
        return (start-destination)*264;
    }else {return (destination-start)*264}
}

function calculatesFarePrice(start, destination){
    let distanceFeet=  (distanceTravelledInFeet(start, destination));
        if (distanceFeet <=400){return 0}
        else if (distanceFeet > 400 && distanceFeet<= 2000){
            return ((distanceFeet-400)*2/100)
        }
        else if (distanceFeet> 2000 && distanceFeet <=2500){return 25 }
            
        else if (distanceFeet> 2500){
            return 'cannot travel that far';
        }
    }

console.log (calculatesFarePrice(25, 30))

// let destanceFeet; 
// if (start > destination){
//     destanceFeet= (start - destination)*264;
// }else {destanceFeet=  (destination-start)*264}