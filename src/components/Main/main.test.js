import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
describe('Main', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <Main
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });
