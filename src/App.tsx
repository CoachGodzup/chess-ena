import React from 'react'
import { Chessboard } from './component/chessboard/Chessboard';


function App() {
  return (<>
    <h1>Cess board</h1>
    <Chessboard x={8} y={8}></Chessboard>
  </>
  );
}

export default App;
