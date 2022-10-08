var assert = require('assert');
var exercise = require('./main.js');
describe('Display Chess Board', function () {
    it('Test 1', function () {
        assert.equal(exercise.chessBoard(), 'Hello world!');
    });
});
