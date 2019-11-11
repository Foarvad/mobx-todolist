import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './index.css';
import * as models from './Models';
import App from './Components/App/App-container';


ReactDOM.render(
    <Provider {...models}>
        <App />
    </Provider>,
    document.getElementById('root')
);
