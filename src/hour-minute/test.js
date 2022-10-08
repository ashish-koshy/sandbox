var assert = require('assert');
var exercise = require('./main.js');
describe('Print hour(s) and minute(s)', function () {
    it('3600 --> "1 hour(s) and 0 minute(s)"', function () {
        return assert.equal(
            exercise.hourMinute(3600),
            '3600 --> "1 hour(s) and 0 minute(s)"'
        );
    });
    it('3601 --> "1 hour(s) and 0 minute(s)"', function () {
        return assert.equal(
            exercise.hourMinute(3601),
            '3601 --> "1 hour(s) and 0 minute(s)"'
        );
    });
    it('3500 --> "0 hour(s) and 58 minute(s)"', function () {
        return assert.equal(
            exercise.hourMinute(3500),
            '3500 --> "0 hour(s) and 58 minute(s)"'
        );
    });
    it('323500 --> "89 hour(s) and 51 minute(s)"', function () {
        return assert.equal(
            exercise.hourMinute(323500),
            '323500 --> "89 hour(s) and 51 minute(s)"'
        );
    });
});
