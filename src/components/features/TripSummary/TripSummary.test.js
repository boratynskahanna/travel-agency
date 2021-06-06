import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct address', () => {
    const id = 'abc';
    const expectedLink = `/trip/abc`;
    const component = shallow(<TripSummary id={id} image={'image'} name={'name'} tags={[]} cost={'cost'} days={1} />);
        
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should check if <img> has correct src and alt', () => {
    const expectedName = 'name';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary name={expectedName} image={expectedImage} tags={[]} cost={'cost'} days={1} id={'id'}/>);
      
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });
  it('should render props name, cost, days', () => {
    const expectedName = 'name',
      expectedCost = '100',
      expectedDays = 1;
    
    const component = shallow(<TripSummary image={'image'} tags={[]} name={expectedName} cost={expectedCost} days={1} id={'id'} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);

  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });


  it('should render three tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary image={'image'} tags={expectedTags} name={'name'} cost={'cost'} days={1} id={'id'} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });
  it('should not render div tags if props tags is false', () => {
    const component = shallow(<TripSummary id={'/trip/abc'} image={'image.jpg'} name={'alt'} cost={'1'} days={1} tags={[]} />);
    console.log(component.debug());
    expect(component.find('.tags span').exists()).toBe(false);
  });
});
