const assert = require('assert');
const app = require('../../src/app');

describe('\'arts\' service', () => {
  it('registered the service', () => {
    const service = app.service('arts');

    assert.ok(service, 'Registered the service');
  });
});
