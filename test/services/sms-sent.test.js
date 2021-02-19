const assert = require('assert');
const app = require('../../src/app');

describe('\'sms-sent\' service', () => {
  it('registered the service', () => {
    const service = app.service('sms-sent');

    assert.ok(service, 'Registered the service');
  });
});
