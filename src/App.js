import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";
import "./app.css"

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDuSaUqbtmqxLbgzyyEbxSatDn9VucvjM8",
  authDomain: "react-messaging-66ae3.firebaseapp.com",
  projectId: "react-messaging-66ae3",
  storageBucket: "react-messaging-66ae3.appspot.com",
  messagingSenderId: "510360445616",
  appId: "1:510360445616:web:5d6ed32271b346d1cc9175",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div>
      <header></header>
      <main>
        {user ? (
          <ChatRoom auth={auth} timeStamp={firebase.firestore.FieldValue.serverTimestamp} firestore={firestore}/>
        ) : (
          <SignIn auth={auth} />
        )}
      </main>
    </div>
  );
}

export default App;
