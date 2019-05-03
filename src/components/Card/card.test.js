import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
describe('Card', () => {
    let wrapper;
    let mockProps = {category : 'vehicle', display: [{name: 'Luke'}, {name: 'Obi'}, {name: 'steve'}]};
    beforeEach(() => {
      wrapper = shallow(
        <Card {...mockProps}
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });
