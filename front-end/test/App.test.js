import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('a passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});
