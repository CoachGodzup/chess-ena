import {
    faChessPawn,
    faChessRook,
    faChessKnight,
    faChessBishop,
    faChessQueen,
    faChessKing
} from '@fortawesome/free-solid-svg-icons'
import { Color, Team } from '../common'

type ChessPiece = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king'
type ChessPieceIcons = typeof faChessPawn |
    typeof faChessRook |
    typeof faChessKnight |
    typeof faChessBishop |
    typeof faChessQueen |
    typeof faChessKing


export type Piece = {
    tag: ChessPiece,
    team: Team,
}

type PieceProps = {
    frequency: number,
    icon: ChessPieceIcons
}

const teamPieces: Record<ChessPiece, PieceProps> = {
    'pawn': {
        frequency: 8, icon: faChessPawn
    },
    'rook': {
        frequency: 2, icon: faChessRook
    },
    'knight': {
        frequency: 2, icon: faChessKnight
    },
    'bishop': {
        frequency: 2, icon: faChessBishop
    },
    'queen': {
        frequency: 1, icon: faChessQueen
    },
    'king': {
        frequency: 1, icon: faChessKing
    }
}

type TeamProps = {
    color: Color
}

export const teamProps: Record<Team, TeamProps> = {
    'white': { color: 'wheat' },
    'black': { color: 'brown' }
}

export const createTeam = (team: Team) => {
    const output = [] as Piece[]
    Object.keys(teamPieces).forEach(key => {
        const props = teamPieces[key as ChessPiece]
        let i;
        for (i = 0; i < props.frequency; i++) {
            output.push({
                tag: key as ChessPiece,
                team
            })
        }
    })
    return output;
}