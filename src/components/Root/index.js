import { Switch, Route, Link } from "react-router-dom";
import "./style.css";

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    clickHandler() {
        console.log("click");
    }

    render() {
        return (
            <div className="child-class">
                I`m a child!
                <div>
                    <Link to="/one">One</Link>
                    <br/>
                    <Link to="/">Home</Link>
                </div>
                <Switch>
                    <Route exact path="/">
                        <p>Home Page</p>
                    </Route>
                    <Route path="/one">
                        <p>One Page</p>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Root;
