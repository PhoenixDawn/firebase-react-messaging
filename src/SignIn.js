import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const SignIn = ({auth}) => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  }

export default SignIn
