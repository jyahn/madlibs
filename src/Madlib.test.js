import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Madlib from './Madlib'
import StoryOptionForm from './StoryOptionForm'

it('renders without crashing', () => {
    shallow(<Madlib />)
});

it('matches snapshot', function () {
    let wrapper = shallow(<Madlib />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})

it('allows for selecting of a madlib theme', function () {
    let wrapper = mount(<StoryOptionForm />);
    const themeInput = wrapper.find('#sickNote');
    themeInput.instance().value = "sickNote";
    themeInput.simulate("change")

    expect(wrapper.state().storyOption).toEqual("sickNote");

});

// got lazy. will write more tests later.