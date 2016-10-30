import React, { Component } from "react";

import {deleteHook} from '../actions/hook-actions';

class HookView extends Component {
    render() {
        const {hook} = this.props;
        return <div>
            <span>Hook: {hook.name}</span>
            <button onClick={() => deleteHook(hook.id)}>x</button>
        </div>;
    }
}

export default HookView;