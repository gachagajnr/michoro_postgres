const assert = require('assert');
const app = require('../../src/app');

describe('\'support-mails\' service', () => {
  it('registered the service', () => {
    const service = app.service('support-mails');

    assert.ok(service, 'Registered the service');
  });
});
