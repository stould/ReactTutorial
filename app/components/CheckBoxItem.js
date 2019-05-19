import React, {Component} from 'react';
import PropTypes from 'prop-types';

const DIV_STYLE = {
    width: 'fit-content',
    userSelect: 'none',
    marginTop: '5px'
};

class CheckBoxItem extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div style={DIV_STYLE} onClick={() => this.props.onChange(!this.props.isChecked)}>
                <input
                    type="checkbox"
                    name={this.props.label}
                    checked={this.props.isChecked}
                    onChange={() => this.props.onChange(!this.props.isChecked)}
                />

                {this.props.label}{' '}{this.props.isChecked ? 'On' : 'Off'}
            </div>
        );
    }
}

CheckBoxItem.propTypes = {
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
    label: PropTypes.string
};

export default CheckBoxItem;