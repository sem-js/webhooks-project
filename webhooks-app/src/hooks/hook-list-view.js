import React, { Component } from "react";
import {extendObservable} from "mobx";
import {observer} from "mobx-react";
import HookView from "./hook-view";
import {createHook} from "../actions/hook-actions";

class HookListView extends Component {
    constructor() {
        super();

        extendObservable(this, {
            newHookName: ''
        });
    }

    render() {
        return <div>
        {this.props.hooks.map(hook => {
            console.log(hook);
            return <HookView hook={hook} key={hook.id} />
        }
        )}
            <div>
                <input onChange={evt => this.newHookName = evt.target.value} />
                <button onClick={() => createHook(this.newHookName)}>Create Test</button>
            </div>
        </div>;
    }
};

export default observer(HookListView);