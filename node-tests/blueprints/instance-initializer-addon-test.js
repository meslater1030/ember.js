'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;

describe('Acceptance: ember generate and destroy instance-initializer-addon', function() {
  setupTestHooks(this);

  it('instance-initializer-addon foo', function() {
    let args = ['instance-initializer-addon', 'foo'];

    return emberNew({ target: 'addon' })
      .then(() => emberGenerateDestroy(args, _file => {
        expect(_file('app/instance-initializers/foo.js'))
          .to.contain("export { default, initialize } from 'my-addon/instance-initializers/foo';");
      }));
  });
});
