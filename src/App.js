import "./App.css";
import { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase.js";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");
  // useState = variable in REACT
  // useEffect = run snippet of code on a  condition in REACT
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        return setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(
    () => {
      // run code here
      setUserName(prompt("Please enter your name"));

      // if its blank inside[ ], this code runs ONCE when the map component loads
    },
    [] //Condition
  );

  const sendMessage = (e) => {
    e.preventDefault();
    // All the logic to send the message
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: userName, text: input }]);
    setInput("");
  };
  return (
    <div className="app">
      <img
        src="https://z-p3-scontent.flhe2-2.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=2&_nc_sid=6825c5&_nc_ohc=shNrhDVgP4QAX_v_OeS&_nc_ht=z-p3-scontent.flhe2-2.fna&oh=477769fc7cd82e7e461fd729a6bdb5b6&oe=60128D7D"
        alt=""
      />
      <h1>Build By Arslan Jajja🚀 </h1>
      <h2>Wellcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
