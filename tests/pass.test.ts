import {
    describe,
    it,
} from 'vitest';

describe.concurrent('pass', () => {
    it('pass', ({ expect }) => expect(true).toBe(true));
});
