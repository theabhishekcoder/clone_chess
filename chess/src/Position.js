export const  Pawn_position = [];
export const Ele_position = [];

const horaxis = ["a","b","c","d","e","f","g","h"];
// const vertaxis = ["1","2","3","4","5","6","7","8"];
for(let i = 2,m = "B" ; i<= 6 ; i = i+4,m = "W"){
   for(let j = 0 ; j < 8 ; j++){
       Pawn_position.push({img: `img/${m}_pawn.png`,
                    x:i,
                    y:horaxis[j]})
   }}
  
for(let i = 0,m = "B" ; i <= 7 ; i=i+7,m = "W"){
    for(let j = 0 ; j <= 7 ; j=j+7){
        Ele_position.push({img:`img${m}_ele.png`,
                    x:j,
                    y: horaxis[i]
    
    })
    }
}


// export  Ele_position;
// export  Pawn_position;