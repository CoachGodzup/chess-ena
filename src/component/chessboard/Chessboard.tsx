import { Piece } from '../piece/Piece'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChessPawn,
    faChessRook,
    faChessKnight,
    faChessBishop,
    faChessQueen,
    faChessKing
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Chessboard.css'

type ChessboardProps = {
    x: number,
    y: number,
    piecePositions: Record<string, Piece>
}

const getIconFromChessPiece = (piece: Piece) => {
    switch (piece.tag) {
        case 'pawn': return faChessPawn;
        case 'rook': return faChessRook;
        case 'knight': return faChessKnight;
        case 'bishop': return faChessBishop;
        case 'queen': return faChessQueen;
        case 'king': return faChessKing;
    }
}

export const Chessboard = ({ x, y, piecePositions }: ChessboardProps) => {
    let i, j;

    const rows = []
    for (j = 0; j < y; j++) {
        const columns = []
        for (i = 0; i < x; i++) {
            const isOdd = ((i + j) % 2 === 1)
            const coord = j + ':' + i
            let piece = null

            if (piecePositions[coord]) {
                piece =
                    < div className={`piece ${piecePositions[coord].team}`}>
                        <FontAwesomeIcon icon={getIconFromChessPiece(piecePositions[coord])}></FontAwesomeIcon> </div>
            }

            columns.push(<div className={`square ${isOdd ? 'odd' : 'even'}`} key={`square:${i}:${j}`}>
                {piece}
            </div >)
        }
        rows.push(<div className="row" key={`row${i}`}>
            {columns}
        </div >)
    }

    return (<div className="board">
        {rows}
    </div>)
}