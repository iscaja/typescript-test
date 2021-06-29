import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {createDomainStore} from "./store/domain";
import {AuthService} from "./service";
import {createUIStore} from "./store/ui";

const authService = new AuthService()

const rootStore = {
    domain: createDomainStore(authService),
    ui: createUIStore()
}

ReactDOM.render(
    <React.StrictMode>
        <App store={rootStore}/>
    </React.StrictMode>,
  document.getElementById('root')
);
