import React from 'react';
import { shallow } from 'enzyme'
import ShopItemTable from "./ShopItemTable";
import { items } from '../data/shopItems';

describe('ShopItemTable', () => {
    it('should render <ShopItemTable />', () => {
        const component = shallow(<ShopItemTable items={items} />);
        expect(component.debug()).toMatchSnapshot();
        expect(component.find('Name')).toBeDefined();
        expect(component.find('Quality')).toBeDefined();
        expect(component.find('Sell In Days')).toBeDefined();
    });

    it('renders learn react link', () => {
        const component = shallow(<ShopItemTable items={items} />);
        const header = component.find('.item-row');
        expect(header.length).toBe(5);
    });
});
