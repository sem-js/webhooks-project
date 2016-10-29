import React, { Component } from "react";

class HookView extends Component {
    render() {
        const {hook} = this.props;
        return <div>Hook: {hook.name}</div>;
    }
}

export default HookView;