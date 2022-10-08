var assert = require('assert');
var exercise = require('./main.js');
describe('Paint letter boxes', function () {
    it('Should produce the output - 1963011111', function () {
        assert.equal(
            exercise.letterBox(125, 132).join(''),
            [1, 9, 6, 3, 0, 1, 1, 1, 1, 1].join('')
        );
    });
});
