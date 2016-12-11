import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {extendObservable} from 'mobx';
import {observer} from 'mobx-react';
import HookView from './hook-view';
import {createHook} from '../actions/hook-actions';

class HookListView extends Component {
    constructor() {
        super();

        extendObservable(this, {
            newHookName: ''
        });
    }

    render() {
        return <div>
            <div>
                <TextField hintText="Hook Name" onChange={evt => this.newHookName = evt.target.value} />
                <RaisedButton label="Create" onClick={() => createHook(this.newHookName)} primary={true} />
            </div>

            {this.props.hooks.map(hook => <HookView hook={hook} key={hook.id} />)}
        </div>;
    }
};

export default observer(HookListView);
