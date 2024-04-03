import React, { useEffect, useState } from "react";
import { Button, List, Avatar, Input } from "antd";

import "./App.scss";
import { currentUserKeyLocalKey } from "./Common/constant";
const WebSocketComponent = () => {
  const [message, setMessage] = useState("");
  const [receivedMessages, setreceivedMessages] = useState([]);
  const [ws, setWs] = useState(null);
  let user = JSON.parse(localStorage.getItem(currentUserKeyLocalKey));
  const prepareObj = () => {
    return {
      ...user,
      message,
    };
  };
  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:8080");
    setWs(newWs);

    newWs.onopen = () => {
      newWs.send(JSON.stringify(prepareObj()));
    };

    newWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setreceivedMessages(data);
    };

    newWs.onclose = () => {
      console.log("Connection closed");
    };
    return () => {
      newWs.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(prepareObj()));
      setMessage("");
    } else {
      console.log("WebSocket connection is not open");
    }
  };
  return (
    <div>
      <h1>WebSocket Component</h1>
      <div className="MessageTyping">
        <Input
          value={message}
          onChange={(e) => {
            const { value } = e.target;
            setMessage(value);
          }}
        />
        <Button onClick={sendMessage} type="primary">
          Primary Button
        </Button>
      </div>
      <div>
        <List>
          {receivedMessages?.map((user) => {
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{user?.firstName?.slice(0, 1)}</Avatar>}
                  title={<a>{`${user?.firstName} ${user?.lastName}`}</a>}
                  description={user?.message}
                />
              </List.Item>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default WebSocketComponent;
