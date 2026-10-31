import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateAIRequest } from '../core/request.js';

test('validateAIRequest trims surrounding whitespace', () => {
  assert.equal(validateAIRequest({ input: '  hello  ' }), 'hello');
});

test('validateAIRequest rejects empty input', () => {
  assert.throws(() => validateAIRequest({ input: '   ' }), /cannot be empty/);
});

test('validateAIRequest rejects non-string input', () => {
  assert.throws(() => validateAIRequest({ input: 42 as unknown as string }), /must be a string/);
});
