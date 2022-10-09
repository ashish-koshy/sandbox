var assert = require('assert');
var exercise = require('./main.js');
describe('Display Chess Board', function () {
    it('Should generate a 6x4 chess board', function () {
        assert.equal(
            JSON.stringify(exercise.chessBoard(6, 4)),
            JSON.stringify([
                ['O', 'X', 'O', 'X'],
                ['X', 'O', 'X', 'O'],
                ['O', 'X', 'O', 'X'],
                ['X', 'O', 'X', 'O'],
                ['O', 'X', 'O', 'X'],
                ['X', 'O', 'X', 'O'],
            ])
        );
    });

    it('Should generate a 3x7 chess board', function () {
        assert.equal(
            JSON.stringify(exercise.chessBoard(3, 7)),
            JSON.stringify([
                ['O', 'X', 'O', 'X', 'O', 'X', 'O'],
                ['X', 'O', 'X', 'O', 'X', 'O', 'X'],
                ['O', 'X', 'O', 'X', 'O', 'X', 'O'],
            ])
        );
    });
});
