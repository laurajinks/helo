import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav/Nav";
import routes from "./routes";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Switch>{routes}</Switch>
                </div>
            </Router>
        );
    }
}

export default App;
