import React, { useEffect, useState } from "react";

const WebSocketComponent = () => {
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState(null);
  const userId = localStorage.getItem("userId") || "";

  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:3000");
    setWs(newWs);

    newWs.onopen = () => {
      const messageToSend = {
        message: "Hello from client",
        userId,
      }; 
      newWs.send(JSON.stringify(messageToSend));
    };

    newWs.onmessage = (event) => {
      const receivedMessages = JSON.parse(event.data);
      console.log("receivedMessages", receivedMessages);
    };

    newWs.onclose = () => {
      console.log("Connection closed");
    };

    // Clean up WebSocket connection on unmount
    return () => {
      newWs.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageToSend = {
        message,
        userId,
      };
      ws.send(JSON.stringify(messageToSend));
      setMessage("");
    } else {
      console.log("WebSocket connection is not open");
    }
  };

  return (
    <div>
      <h1>WebSocket Component</h1>
      <input
        value={message}
        onChange={(e) => {
          const { value } = e.target;
          setMessage(value);
        }}
      />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
};

export default WebSocketComponent;
