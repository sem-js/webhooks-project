import DOMReady from './utils/DOMReady';
import rootView from './views/rootView';
import './style/reset.css';
import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css';

import {fetchHooks} from './actions/hook-actions';

DOMReady(() => {
  // mount the root view
  fetchHooks();
  rootView();
});
