import firebase from "..firebaseConfig";

// Sign in email function
const sendSignInLinkToEmail = (email) => {
  // Hold the URL and whatever else you need to pass
  // to the email sign-in link
  const actionCodeSettings = {
    url: "http://localhost:3000/email-sign-in",
    handleCodeInApp: true,
  };

  return firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      return "success";
    })
    .catch((error) => {
      return error;
    });
};
