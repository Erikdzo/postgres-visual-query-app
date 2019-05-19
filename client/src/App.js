import React from 'react';
import QueryPage from "./routes/QueryPage";
import history from "./utils/history";
import store from "./store";
import LandingPage from "./routes/LandingPage";
import {Provider} from "react-redux";
import {Route, Router} from "react-router-dom";

function App() {


    return (
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/query" component={QueryPage}/>
                </div>

            </Router>

        </Provider>
    )
}

export default App;