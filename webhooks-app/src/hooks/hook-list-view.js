import React, { Component } from "react";
import {observer} from "mobx-react";
import HookView from "./hook-view";

class HookListView extends Component {
    render() {
        return <div>
        {this.props.hookList.hooks.map(hook => {
            console.log(hook);
            return <HookView hook={hook} key={hook.id} />
        }
        )}
        </div>;
    }
};

export default observer(HookListView);