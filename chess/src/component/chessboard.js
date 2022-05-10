import styling from "../style/chessboard.module.css";

const horaxis = ["a","b","c","d","e","f","g","h"];
const vertaxis = ["1","2","3","4","5","6","7","8"];

export default function ChessBoard(){

    const title =[];

    for(let i = 7 ; i>= 0 ; i--){
        for(let j = 0 ; j<=7 ; j++){
            let position = (i+j+1)%2
            console.log(i,j,position)
            title.push(
                <div key={`${horaxis[i]}${vertaxis[j]}`}className={position?styling.green : styling.white }>{[horaxis[j],vertaxis[i]]}</div>
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