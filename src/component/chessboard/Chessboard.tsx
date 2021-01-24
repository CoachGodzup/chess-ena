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

export const Chessboard = ({ x, y }: ChessboardProps) => {
    let i, j;
    const pieces: Record<string, Piece> = {}
    pieces['0:3'] = {
        tag: 'king',
        team: 'black'
    }
    pieces['3:7'] = {
        tag: 'pawn',
        team: 'white'
    }

    console.log(pieces)

    const rows = []
    for (j = 0; j < y; j++) {
        const columns = []
        for (i = 0; i < x; i++) {
            const isOdd = ((i + j) % 2 === 1)
            const coord = j + ':' + i
            let piece = null

            if (pieces[coord]) {
                piece =
                    < div className={`piece ${pieces[coord].team}`}>
                        <FontAwesomeIcon icon={getIconFromChessPiece(pieces[coord])}></FontAwesomeIcon> </div>
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