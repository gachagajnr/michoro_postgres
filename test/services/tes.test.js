const assert = require('assert');
const app = require('../../src/app');

describe('\'tes\' service', () => {
  it('registered the service', () => {
    const service = app.service('tes');

    assert.ok(service, 'Registered the service');
  });
});
