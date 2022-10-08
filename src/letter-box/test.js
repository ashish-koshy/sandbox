var assert = require('assert');
var exercise = require('./main.js');
describe('Paint letter boxes', function () {
    it('Test 1', function () {
        assert.equal(exercise.letterBox(), 'Hello world!');
    });
});
