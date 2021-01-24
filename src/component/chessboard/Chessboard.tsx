import { Piece } from '../piece/Piece'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Chessboard.css'

type ChessboardProps = {
    x: number,
    y: number
}



export const Chessboard = ({ x, y }: ChessboardProps) => {
    let i, j;

    const rows = []
    for (i = 0; i < y; i++) {
        const columns = []
        for (j = 0; j < x; j++) {
            const isOdd = ((i + j) % 2 === 1)
            columns.push(<div className={`square ${isOdd ? 'odd' : 'even'}`} key={`square:${j}:${i}`}>
            </div>)
        }

        rows.push(<div className="row" key={`row${i}`}>
            {columns}
        </div >)
    }


    return (<div className="board">
        <h2>this is board</h2>
        {rows}
    </div>)
}