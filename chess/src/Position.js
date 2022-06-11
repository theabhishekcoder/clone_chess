const Chess_position_Intial = new Map();

const horaxis = ["a","b","c","d","e","f","g","h"];
const vertaxis = ["1","2","3","4","5","6","7","8"];
for(let i = 1,m = "W" ; i<= 6 ; i = i+5,m = "B"){
   for(let j = 0 ; j < 8 ; j++){
        let po = `${vertaxis[i]}${horaxis[j]}`;
        let img = `img/${m}_pawn.png`
        Chess_position_Intial.set(po,img)
   }}
  
for(let i = 0,m = "W" ; i <= 7 ; i=i+7,m = "B"){
    for(let j = 0 ; j <= 7 ; j=j+7){
    let po = `${vertaxis[i]}${horaxis[j]}`;
    let img = `img/${m}_ele.png`
    Chess_position_Intial.set(po,img)
    }
}

for(let i = 0,m = "W" ; i <= 7 ; i=i+7,m = "B"){
    for(let j = 1 ; j <= 6 ; j=j+5){
    let po = `${vertaxis[i]}${horaxis[j]}`;
    let img = `img/${m}_horse.png`
    Chess_position_Intial.set(po,img)
    }
}

for(let i = 0,m = "W" ; i <= 7 ; i=i+7,m = "B"){
    for(let j = 2 ; j <= 5 ; j=j+3){
    let po = `${vertaxis[i]}${horaxis[j]}`;
    let img = `img/${m}_biss.png`
    Chess_position_Intial.set(po,img)
    }
}

for(let i = 0,m = "W" ; i <= 7 ; i=i+7,m = "B"){
    
    let po = `${vertaxis[i]}${horaxis[3]}`;
    let img = `img/${m}_queen.png`
    Chess_position_Intial.set(po,img)
}

for(let i = 0,m = "W" ; i <= 7 ; i=i+7,m = "B"){
    
    let po = `${vertaxis[i]}${horaxis[4]}`;
    let img = `img/${m}_king.png`
    Chess_position_Intial.set(po,img)
}






 
 export default Chess_position_Intial;

