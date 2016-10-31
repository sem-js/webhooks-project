import React, { Component } from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import {deleteHook} from '../actions/hook-actions';

class HookView extends Component {
    render() {
        const {hook} = this.props;
        return <Card>
            <CardTitle title="Hook" subtitle={hook.name} />
            <CardText>
                Include the client-side code necessary for attaching to hook events
            </CardText>
            <CardActions>
                <RaisedButton label="Delete" onClick={() => deleteHook(hook.id)} primary={true} />
            </CardActions>
        </Card>;
    }
}

export default HookView;