import React from 'react';
import { shallow } from 'enzyme'
import GildedRose from "./GildedRose";
import ShopItemTable from "./components/ShopItemTable";
import WelcomeMessage from './components/WelcomeMessage';

describe('GildedRose', () => {
    it('should render <GildedRose />', () => {
        const component = shallow(<GildedRose />);
        expect(component.debug()).toMatchSnapshot();
        const brand = component.find('NavbarBrand');
        expect(brand.text().includes('The Gilded Rose')).toBe(true);
    });

    it('renders two <WelcomeMessage /> components', () => {
        const component = shallow(<GildedRose />);
        expect(component.find(WelcomeMessage).length).toBe(1);
    });

    it('renders two <ShopItemTable /> components', () => {
        const component = shallow(<GildedRose />);
        expect(component.find(ShopItemTable).length).toBe(2);
    });

    it('clicks Update Quality button two times and it updates the item count in tab title', () => {
        const component = shallow(<GildedRose />);
        expect(component.find({ eventKey: 'sale' }).props().title).toBe('On Sale(5)');
        expect(component.find({ eventKey: 'discount' }).props().title).toBe('Discount(0)');
        component.find('Button').simulate('click');
        component.find('Button').simulate('click');
        expect(component.find({ eventKey: 'sale' }).props().title).toBe('On Sale(4)');
        expect(component.find({ eventKey: 'discount' }).props().title).toBe('Discount(1)');
    });
});
