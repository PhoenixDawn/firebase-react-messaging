import { useCollectionData } from "react-firebase-hooks/firestore";
import SignOut from "./SignOut";
import { useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatRoom = ({ auth, firestore, timeStamp }) => {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState('')

  const sendMessage = async(e) => {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser;
    console.log(timeStamp)
    await messageRef.add({
        text: formValue,
        createdAt: timeStamp(),
        uid,
        photoURL
    })
    setFormValue('')

  }

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => (
            <ChatMessage auth={auth} key={msg.id} message={msg} />
          ))}
        {/* <SignOut auth={auth} /> */}
      </div>
      <form onSubmit={sendMessage}>
            <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
            <button type="submit">Send</button>
      </form>
      <SignOut auth={auth}/>
    </>
  );
};

export default ChatRoom;
