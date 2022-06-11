import styling from "../style/chessboard.module.css";
import Titled from "./title";


import Chess_position from "../Position"

const horaxis = ["a","b","c","d","e","f","g","h"];
const vertaxis = ["1","2","3","4","5","6","7","8"];

export default function ChessBoard(){

    const title =[];

    for(let i = 7 ; i>= 0 ; i--){
        for(let j = 0 ; j<=7 ; j++){
            let position = (i+j+1)%2;
            let keys = `${horaxis[i]}${vertaxis[j]}`;
            let img = Chess_position.get(`${vertaxis[i]}${horaxis[j]}`);
            title.push(
                <Titled key={keys} position={position}  img = {img} />
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