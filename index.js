// Code your solution in this file!

//function describe(){ return document.write("this is node js ")}

function distanceFromHqInBlocks(x){
  const HQ_BLOCK = 42;
  return Math.abs(HQ_BLOCK-x);
}
 
 function distanceFromHqInFeet(z){
   return distanceFromHqInBlocks(z)*264;
 }

function distanceTravelledInFeet(start , end){
  return Math.abs(start-end) * 264;
  
}



function distanceTravelledInFeet(point_a,point_b){
const BLOCK_LENGTH = 264;
  return Math.abs(point_a-point_b) * BLOCK_LENGTH;
}
function calculatesFarePrice(point_a,point_b)
{ let distance = distanceTravelledInFeet(point_a,point_b)

//first 400 are free 
let charge =0;
// 400 to 2000ft, 2 cent per feet 
if(distance >= 400 && distance <= 2000)
{
 charge = (distance-400) * 0.02;
}
// 2000 - 2500 , 25 dollars
else if(distance >= 2000 && distance <= 2500)
{ charge = 25 }
// >2500
else if (distance >= 2500 )
{charge= "cannot travel that far" }

//else{
//  console.log("NO CAse FOR DISTANCE" , distance);
//}
return charge;


}


