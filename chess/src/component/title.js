import styling from "../style/title.module.css";

// import Pawn_position from "../Position";

export default function Titled({position}){

    // console.log(Pawn_position)
    return(<>
    <div className={position?styling.green : styling.white }>
        {/* <img src="img/B_pawn.png" alt="pieces"/> */}
        {/* {
            Pawn_position.map((val) => {
                return(<>
                <img src="img/B_pawn.png" alt="pieces"/>
                </>)
            } )
        } */}
    </div>
    </>)
}