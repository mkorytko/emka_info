import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "./main.scss";
import Root from "./components/Root";

const App = () => (
    <BrowserRouter>
        <div className="root">
            <p>Привет!@@123@!!</p>
            <Root />
        </div>
    </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById("root"));
