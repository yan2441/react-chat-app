import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAPyStoLLJTRnVqenk5Zx5w2y5HqIVMb6w",
  authDomain: "reactjs-chat-app-100.firebaseapp.com",
  projectId: "reactjs-chat-app-100",
  storageBucket: "reactjs-chat-app-100.appspot.com",
  messagingSenderId: "174073171557",
  appId: "1:174073171557:web:c99cc970b1ccd85074008c"
}).auth();