import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import { useFirestoreQuery } from "../hooks";
// Components
import Message from "./Message";
// import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import CameraMan from "./CameraMan";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

const Channel = ({ user = null }) => {
  const db = firebase.firestore();
  const messagesRef = db.collection("messages");
  const messages = useFirestoreQuery(
    messagesRef.orderBy("createdAt", "desc").limit(100)
  );

  const [newMessage, setNewMessage] = useState("");

  const inputRef = useRef();
  const bottomListRef = useRef();

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage("");
      // Scroll down to the bottom of the list
      bottomListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={8}>
          <div className="font-bold text-3xl text-center">
            <p className="mb-1">Camera</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="font-bold text-3xl text-center">
            <p className="mb-1">Chat</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CameraMan/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div
            className="flex flex-col h-full"
            style={{ with: "300px", height: "700px", overflow: "auto" }}
          >
            <div className="overflow-auto h-full">
              <div className="py-4 max-w-screen-lg mx-auto">
                <ul>
                  {messages
                    ?.sort((first, second) =>
                      first?.createdAt?.seconds <= second?.createdAt?.seconds
                        ? -1
                        : 1
                    )
                    ?.map((message) => (
                      <li key={message.id}>
                        <Message {...message} />
                      </li>
                    ))}
                </ul>

                <div ref={bottomListRef} />
              </div>
            </div>
            <div className="mb-6 mx-4">
              <form
                onSubmit={handleOnSubmit}
                className="flex flex-row bg-gray-200 dark:bg-coolDark-400 rounded-md px-4 py-3 z-10 max-w-screen-lg mx-auto dark:text-white shadow-md"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={newMessage}
                  onChange={handleOnChange}
                  placeholder="KKK viết ở đây nè bro..."
                  className="flex-1 bg-transparent outline-none"
                />
                <button
                  type="submit"
                  disabled={!newMessage}
                  className="uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Send (là Gửi đấy )
                </button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Channel.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};

export default Channel;
