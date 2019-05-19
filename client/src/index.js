import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faTimes, faExternalLinkSquareAlt, faPlus, faTrash, faSort, faDownload, faLink, faEquals, faCopy} from "@fortawesome/free-solid-svg-icons";
import App from "./App";


library.add(faTimes, faExternalLinkSquareAlt, faPlus, faTrash, faSort, faDownload, faLink, faEquals, faCopy);

const rootDocument = document.getElementById('root');

ReactDOM.render( <App />, rootDocument);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
