import "@babel/polyfill";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getData, postData } from "./common/fetch";
import "./style.css";
import "./common/options";

const Desktop = React.lazy(() => import("./Desktop"));
const Admin = React.lazy(() => import("./Admin"));
const Login = React.lazy(() => import("./Login"));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
        }
    }
    componentDidMount() {
        getData("/user/info").then(({ data }) => {
            if (data && data.success) {
                this.setAdmin(true);
            }
        });
    }

    setAdmin = (admin) => {
        this.setState({ admin });
    }

    render () {
        const { admin } = this.state;
        return(
            <BrowserRouter>
                <React.Suspense fallback={<div>asd</div>}>
                    <Switch>
                        {
                            admin && (
                                <Route path="/admin">
                                    <Admin />
                                </Route>
                            )
                        }
                        <Route path="/login">
                            <Login setAdmin={this.setAdmin} />
                        </Route>
                        <Route path="/">
                            <Desktop admin={admin} />
                        </Route>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>)
    }
}


ReactDom.render(<App />, document.getElementById("root"));
