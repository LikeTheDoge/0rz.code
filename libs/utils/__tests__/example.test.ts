import { expect, test } from '@jest/globals';
import { create } from '../src/index'

test('create', () => {
    class AAA {
        aaa = ''
    }

    expect(create(new AAA(),{aaa:'123'}).aaa).toBe('123')
});
