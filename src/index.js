import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App2 from "./example-dnd/App2";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
    <Provider store={store}>
            <App2/>,
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
