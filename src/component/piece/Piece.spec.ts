import { createTeam, Piece } from './Piece'

describe('Piece', () => {
    it('should declare an entire new team', () => {
        const output: Array<Piece> = createTeam('black')
        expect(output.length).toBe(16)
        expect(output[0].tag).toBe('pawn')
        expect(output[1].tag).toBe('pawn')
        expect(output[2].tag).toBe('pawn')
        expect(output[3].tag).toBe('pawn')
        expect(output[4].tag).toBe('pawn')
        expect(output[5].tag).toBe('pawn')
        expect(output[6].tag).toBe('pawn')
        expect(output[7].tag).toBe('pawn')
        expect(output[8].tag).toBe('rook')
        expect(output[9].tag).toBe('rook')
        expect(output[10].tag).toBe('knight')
        expect(output[11].tag).toBe('knight')
        expect(output[12].tag).toBe('bishop')
        expect(output[13].tag).toBe('bishop')
        expect(output[14].tag).toBe('queen')
        expect(output[15].tag).toBe('king')
    })
})