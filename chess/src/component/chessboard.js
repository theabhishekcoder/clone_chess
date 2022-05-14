import styling from "../style/chessboard.module.css";
import Titled from "./title";

import {Pawn_position,Ele_position} from "../Position";

const horaxis = ["a","b","c","d","e","f","g","h"];
const vertaxis = ["1","2","3","4","5","6","7","8"];

export default function ChessBoard(){

    const title =[];
    // const title2 = [];

    console.log(Pawn_position,Ele_position);

    // let Black_pawn = Pawn_position.map()

    for(let i = 7 ; i>= 0 ; i--){
        for(let j = 0 ; j<=7 ; j++){
            let position = (i+j+1)%2;
            // console.log(i,j,position)
            let keys = `${horaxis[i]}${vertaxis[j]}`;

            title.push(
                <Titled key={keys} position={position}  />
            )
        }
    }
    return(<>
    <div className={styling.chessboard}>
       {title}    
       </div>
    </>
    )
}