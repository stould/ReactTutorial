import React from 'react';

import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Form from '../app/components/Form';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Testing Form component', function() {
    let props;
    let mountedForm;

    const form = () => {
        if (!mountedForm) {
            mountedForm = mount(
                <Form {...props} />
            );

        }

        return mountedForm;
    };

    beforeEach(() => {
        props = {
            options: ['op1', 'op2']
        };

        mountedForm = undefined;
    });

    it('counts checkbox inputs in the form', () => {
        expect(form().find('input')).to.have.lengthOf(2);
    });

    it('counts total of selected checkboxes version 1 - one click', () => {
        const checkbox0 = () => form().find('input').at(0);

        checkbox0().simulate('click');
        
        const instance = form().instance();
        expect(instance.totalOn()).to.equal(1);
    });

    it('counts total of selected checkboxes version 2 - two clicks', () => {
        const checkbox0 = () => form().find('input').at(0);
        const checkbox1 = () => form().find('input').at(1);

        checkbox0().simulate('click');
        checkbox1().simulate('click');
        
        const instance = form().instance();
        expect(instance.totalOn()).to.equal(2);
    });

    it('counts total of selected checkboxes version 3 - three clicks', () => {
        const checkbox0 = () => form().find('input').at(0);
        const checkbox1 = () => form().find('input').at(1);

        checkbox0().simulate('click');
        checkbox1().simulate('click');
        checkbox0().simulate('click');

        const instance = form().instance();
        expect(instance.totalOn()).to.equal(1);
    });

    it('checks if the checkbox changes its checked value and the other keeps its value', () => {
        const checkbox0 = () => form().find('input').at(0);
        const checkbox1 = () => form().find('input').at(1);

        checkbox0().simulate('click');
        expect(checkbox0().props().checked).to.equal(true);
        expect(checkbox1().props().checked).to.equal(false);

        const instance = form().instance();
        expect(instance.totalOn()).to.equal(1);
    });
});

