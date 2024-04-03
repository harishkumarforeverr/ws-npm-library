import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import "./index.scss";
import App from "./App";
import "./i18n";

import { currentUserKeyLocalKey } from "./Common/constant";
import { Button } from "antd";

let users = ["Srinivas", "Bhagav", "seenu", "Jay", "Santhoshi"];
const setUser = (key) => {
  let data = null;
  if (key === "Bhagav") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304811",
      firstName: "Bhagav",
      lastName: "Yadav",
      email: "Bhagav@gmail.com",
      phone: "(909) 090-9090",
    };
  }

  if (key === "seenu") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304813",
      firstName: "seenu",
      lastName: "Kumar",
      email: "seenu@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  if (key === "Jay") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304814",
      firstName: "Jay",
      lastName: "Nari",
      email: "Jay@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  if (key === "Santhoshi") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304815",
      firstName: "Santhoshi",
      lastName: "Nari",
      email: "Santhoshi@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  if (key === "Srinivas") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304817",
      firstName: "Srinivas",
      lastName: "Nari",
      email: "Srinivas@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  return data;
};

const Index = () => {
  return (
    <>
      {JSON.parse(localStorage.getItem(currentUserKeyLocalKey))?._id ? (
        <App />
      ) : (
        <>
          <h1> Right Now we are supporting only {users?.length} userrs</h1>
          <h1> Login As</h1>
          {users.map((value) => {
            return (
              <h1>
                {value}{" "}
                <Button
                  onClick={() => {
                    let sender = setUser(value);
                    localStorage.setItem(currentUserKeyLocalKey, JSON.stringify(sender));
                    window.location.reload();
                  }}
                >
                  {" "}
                  Login
                </Button>
              </h1>
            );
          })}
        </>
      )}
    </>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
