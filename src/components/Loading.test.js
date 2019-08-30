import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders Loading', () => {
    const wrapper = shallow(<Loading handleClick={() => ({})}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
