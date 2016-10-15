import {Lokka} from 'lokka';
import {Transport} from 'lokka-transport-http'

const dataClient = new Lokka({
  transport: new Transport('/api/graphql')
});

export {
    dataClient
};