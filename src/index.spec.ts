/* global describe it */

import {expect} from 'chai';
import {flattenkeys} from "./index";

describe('flattenkeys', () => {
    it('can flatten object to get keys successfully', () => {
        const successfulCases = [
            {
                expected: [
                    'a',
                    'b.c',
                    'b.e.f',
                    'b.e.g',
                    'b.e.h.i',
                    'd'
                ],
                obj: {a: 'a', b: {c: 'c', e: {f: 'f', g: 'g', h: {i: 'i'}}}, d: 'd'}
            },
            {
                expected: [
                    'a',
                    'b.c',
                    'b.e.f',
                    'b.e.g',
                    'd'
                ],
                obj: {a: 'a', b: {c: 'c', e: {f: 'f', g: 'g'}}, d: 'd'}
            },
            {
                expected: [
                    'a',
                    'b.c',
                    'b.e.f',
                    'd'
                ],
                obj: {a: 'a', b: {c: 'c', e: {f: 'f'}}, d: 'd'}
            },
            {
                expected: [
                    'a',
                    'b.c',
                    'd'
                ],
                obj: {a: 'a', b: {c: 'c'}, d: 'd'}
            }
        ];

        successfulCases.map(testCase => {
            const actual = flattenkeys(testCase.obj);
            expect(actual).to.deep.equal(testCase.expected);
        });
    });
});
