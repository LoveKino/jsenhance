'use strict';

let assert = require('assert');

let {
    get
} = require('../index');

describe('index', () => {
    it('get', () => {
        assert.deepEqual(get({
            a: 1
        }, ''), {
            a: 1
        });

        assert.deepEqual(get({
            a: 1
        }, 'a'), 1);

        assert.deepEqual(get({
            a: {
                b: 2
            }
        }, 'a.b'), 2);

        assert.deepEqual(get({
            a: 1
        }, 'd'), null);

        assert.deepEqual(get({
            a: 1
        }, 'a.b.c'), null);
    });
});
