import ChessBoard from "./component/chessboard";
import styling from "./style/App.module.css";

function App() {
  return (
    <div className={styling.App}>
     <ChessBoard/>
    </div>
  );
}

export default App;
