import React from "react";
// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Hooks
import { useAuthState } from "./hooks";
// Components
import Channel from "./components/Channel";
import Loader from "./components/Loader";
// import Camera from './components/CameraMan';
// import Main from './components/Main';
// import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp({
  apiKey: "AIzaSyCHY3dzXK8LJbH9N5TBD7iFFCQGFGbOuNQ",
  authDomain: "nghiem-chat-app.firebaseapp.com",
  databaseURL:
    "https://nghiem-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nghiem-chat-app",
  storageBucket: "nghiem-chat-app.appspot.com",
  messagingSenderId: "151446906940",
  appId: "1:151446906940:web:bf471bf0de548a320d7b39",
});

function App() {
  const { user, initializing } = useAuthState(firebase.auth());

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader size="lg" />
        </div>
      );
    }

    if (user) return <Channel user={user} />;
    // if (user) return <Main user={user} />;

    return (
      <div className="flex items-center justify-center shadow-md h-full">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-white dark:bg-coolDark-600 transition-all">
          <h2 className="mb-2 text-3xl flex items-center">Zoom Fake ;:"V</h2>
          <p className="mb-8 text-lg text-center">Phiên bản lỗi cực mạnh :Đ.</p>
          <button
            onClick={signInWithGoogle}
            className="rounded shadow-button pl-6 pr-8 py-3 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75"
          >
            <svg
              viewBox="5 -5 30 30"
              enableBackground="new 5 -5 30 30"
              className="w-6 h-6 mr-4 flex-shrink-0"
            >
              <path
                fill="#fff"
                d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"
              ></path>
              <path
                fill="#EA4335"
                d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"
              ></path>
              <path
                fill="#4285F4"
                d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"
              ></path>
              <path
                fill="#34A853"
                d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"
              ></path>
            </svg>
            Đăng nhập với Google
          </button>
          <p>Ai thèm lấy tk đâu sợ cái gì</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-white transition-colors">
      {/* <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "56.2500%",
            paddingBottom: "48px",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAEhQRhWj5o/view?embed"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAEhQRhWj5o/view?utm_content=DAEhQRhWj5o&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        >
          dr.tran huu nghiem
        </a>{" "}
        của Hữu Nghiêm Trần
      </div> */}
      <header
        fixed="top"
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
        style={{ height: "var(--topbar-height)" }}
      >
        {/* <ThemeIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setDarkMode((prev) => !prev)}
        /> */}
        <a href="https://alterclass.io/courses/react">
          <img
            src="https://play-lh.googleusercontent.com/e12OaMgCx54dw0yThfFQxpVwpuJEs6KBBoHYLEEunPRypAG_aJw-RvwFrG-hA51uUkM=s192-rw"
            alt="Hệ Hệ Hệ"
            width={50}
          />
        </a>

        <div className="flex items-center">
          {user ? (
            <button
              onClick={signOut}
              className="btn btn-danger"
              style={{ fontWeight: "bold" }}
            >
              Đăng Xuất
            </button>
          ) : null}
          <i className="fa fa-sign-out" aria-hidden="true" />
        </div>
      </header>
      <main
        className="flex-1"
        style={{ maxHeight: "calc(100% - var(--topbar-height))" }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
