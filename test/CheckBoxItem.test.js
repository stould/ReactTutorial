import React from 'react';

import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CheckBoxItem from '../app/components/CheckBoxItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing CheckBoxItem component rendering', function() {
    let props;
    let mountedCheckBoxItem;

    const checkBoxItem = () => {
        if (!mountedCheckBoxItem) {
            mountedCheckBoxItem = mount(
                <CheckBoxItem {...props} />
            );
        }

        return mountedCheckBoxItem;
    };

    beforeEach(() => {
        props = {
            label: undefined,
            isChecked: undefined,
            onChange: undefined
        };

        mountedCheckBoxItem = undefined;
    });

    it('always renders a div', () => {
        const divs = checkBoxItem().find('div');
        expect(divs.length).to.equal(1);
    });

    it('always renders a input', () => {
        const divs = checkBoxItem().find('input');
        expect(divs.length).to.equal(1);
    });
});

describe('Testing CheckBoxItem component change', function() {
    let props;
    let mountedCheckBoxItem;
    let spy;
    
    const checkBoxItem = () => {
        if (!mountedCheckBoxItem) {
            mountedCheckBoxItem = mount(
                <CheckBoxItem {...props} />
            );
        }

        return mountedCheckBoxItem;
    };

    beforeEach(() => {
        spy = sinon.spy();
        props = {
            label: 'Mocked label',
            isChecked: false,
            onChange: spy
        };

        mountedCheckBoxItem = undefined;
    });

    it('tests input label', () => {
        const input = checkBoxItem().find('input');
        expect(input.props().name).to.equal('Mocked label');

        const instance = checkBoxItem().instance();

        expect(instance.props.label).to.equal('Mocked label');
    });

    it('tests if the input is initially not checked', () => {
        const input = checkBoxItem().find('input');
        expect(input.props().checked).to.equal(false);
    });

    it('tests if input is clickable', () => {
        const input = checkBoxItem().find('input');
        expect(spy).to.have.property('callCount', 0);
        input.simulate('click');
        expect(spy).to.have.property('callCount', 1);
    });
});

