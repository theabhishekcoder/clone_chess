import styling from "../style/title.module.css";

//import{ Pawn_position} from "../Position";

export default function Titled({position,img}){

    return(<>
    <div className={position?styling.green : styling.white }>
       { img?<img src={img} alt="pieces"/>:<></> }
       
    </div>
    </>)
}