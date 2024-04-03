import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import "./index.scss";
import App from "./App";
import "./i18n";
import { DummyUserList, getDummyUserList } from "./constants/dummyData";
import { currentUserKeyLocalKey } from "./Common/constant";
import { Button } from "antd";

const Index = () => {
  return (
    <>
      {JSON.parse(localStorage.getItem(currentUserKeyLocalKey))?._id ? (
        <App />
      ) : (
        <>
          <h1> Right Now we are supporting only {DummyUserList?.length} userrs</h1>
          <h1> Login As</h1>
          {DummyUserList.map((value) => {
            return (
              <h1>
                {value}{" "}
                <Button
                  onClick={() => {
                    let sender = getDummyUserList(value);
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
