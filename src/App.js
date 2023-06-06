import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  async login() {
    /*let data = {
            email: username,
            password: password
        };*/
    let base_url = "https://guidesplatform-production.up.railway.app/";

    const config = {
      url: base_url + "/log",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      data: {
        email: "aaa",
        password: "aaa",
      },
      withCredentials: true,
    };

    await axios(config)
      .then((res) => {
        console.log(res);
        console.log(res.headers["set-cookie"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    this.login();

    return <span>b</span>;
  }
}

export default App;
