import React, {Component} from 'react';
import Button from './Button'; // Import a component from another file

const style = {
    'margin-top': '10px'
};

export default class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Button value={'Hello'}/>
                </div>
                <div style={style}>
                    <Button value={'World'}/>
                </div>
            </div>
        );
    }
}