import assert from 'node:assert/strict';
import { test } from 'node:test';
import { TestProvider } from '../core/models/providers/test-provider.js';

test('TestProvider echoes the input without any network access', async () => {
  const provider = new TestProvider();
  const output = await provider.generate({
    model: 'test',
    systemPrompt: '',
    input: 'Hello DALTRON',
    temperature: 0,
    maxTokens: 10,
  });

  assert.equal(output, 'Provider received: Hello DALTRON');
});
