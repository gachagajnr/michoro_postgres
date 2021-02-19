const assert = require('assert');
const app = require('../../src/app');

describe('\'mails-sent\' service', () => {
  it('registered the service', () => {
    const service = app.service('mails-sent');

    assert.ok(service, 'Registered the service');
  });
});
