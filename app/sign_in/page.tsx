import { useEffect } from "react";
import firebase from "firebase/app";

const completeEmailSignIn = () => {
  useEffect(() => {
    const url = window.location.href;
    if (firebase.auth().isSignInWithEmailLink(url)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      firebase.auth().signInWithEmailLink(email, url);
    }
  }
    
    firebase.auth()signInWithEmailLink(email, url).then((result) => {
      window.localStorage.removeItem("emailForSignIn");
      console.log('user signed in': result.user)
    })
      .catch((error) => {
        console.error('Error signing in with email link:', error);
      })
    }
  }, []);

  return (
    <div>
      <h1>Completing sign-up...</h1>
    </div>
  );
};

export default FinishSignUp;