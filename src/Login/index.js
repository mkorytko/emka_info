import React from "react";
import { postData } from "../common/fetch";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, password } = e.target;
        postData("/user/login", { name: name.value, password: password.value }).then(({ data }) => {
            if (data && data.success) {
                this.props.setAdmin(true)
                window.location.href = "/admin";
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" defaultValue="MaksAndreevichAdmin" name="name" /> <br/>
                    <input type="text" defaultValue="M@xf0ker" name="password" />
                    <button type="submit">Ok</button>
                </form>
            </div>
        );
    }
}

export default Login;
