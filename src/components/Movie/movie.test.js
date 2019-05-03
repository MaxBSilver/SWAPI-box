import React from 'react';
import Movie from './Movie';
import { shallow } from 'enzyme';
describe('Movie', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <Movie
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });
