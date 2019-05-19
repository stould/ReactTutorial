import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBoxItem from './CheckBoxItem';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: Array(props.options.length).fill(false),
        };
    }

    //callBack handler from CheckBoxItem
    _onChange = (index, isChecked) => {
        this.setState(() => {
            const newIsChecked = this.state.isChecked.slice();
            newIsChecked[index] = isChecked;
            return { isChecked: newIsChecked };
        });
    }

    totalOn = () => 
        this.state.isChecked.reduce(
            (total, isChecked) => {
                return total + (isChecked ? 1 : 0);
            }, 0
        );

    render() {

        const checkBoxItems = this.props.options.map(
            (label, index) =>
                <CheckBoxItem
                    key={index}
                    label={label}
                    isChecked={this.state.isChecked[index]}
                    onChange={
                        (isChecked) => 
                            this._onChange(index, isChecked)
                    }
                />
        );
        return (
            <>
                <div>Click to switch btw On/Off</div>
                <div>{checkBoxItems}</div>
                <div>{'Total on : '}{this.totalOn()}</div>
            </>
        );
    }
}

Form.propTypes = {
    options: PropTypes.array
};

export default Form;