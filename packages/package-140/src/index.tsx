import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

let win: any = window;
render(<App/>, win.root);
