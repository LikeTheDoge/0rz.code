import { expect, test } from '@jest/globals';
import { StaticFeature } from '../src/index'

test('StaticFeature', () => {
    expect(new StaticFeature().key).toBe('')
});
