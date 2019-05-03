import React from 'react';
import Cards from './Cards';
import { shallow } from 'enzyme';
describe('Cards', () => {
    let wrapper;
    let mockProps = {category : 'vehicle', display: [{name: 'Luke'}, {name: 'Obi'}, {name: 'steve'}]};
    beforeEach(() => {
      wrapper = shallow(
        <Cards {...mockProps}
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });
