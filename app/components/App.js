import React, {Component} from 'react';
import Form from './Form'; // Import a component from another file
import Button from './Button';

document.body.style = 'background-color:#E4E4E4';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Form options={['Op1', 'Op2', 'Op3']} />
                </div>

                <div>
                    <Button value={'Button 1'} />
                </div>
            </div>
        );
    }
}