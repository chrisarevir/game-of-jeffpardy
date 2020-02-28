import firebase, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

type record = any;

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Actions {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();

    this.db = firebase.firestore();
  }

  /*****************
   **** Auth API ****
   *****************/

  createUser = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  getCurrentUser = () =>
    new Promise((resolve, _) => {
      this.auth.onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          resolve({});
        }
      });
    });

  resetPassword = (email: string) => this.auth.sendPasswordResetEmail(email);

  signInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  updatePassword = (password: string) =>
    this.auth.currentUser && this.auth.currentUser.updatePassword(password);

  /******************
   **** Firestore ****
   ******************/

  /* Records */
  // TODO: figure out record object typing
  addPlayerRecord = (record: record[], userId: string) =>
    this.db
      .collection("records")
      .doc(userId)
      .set(record);

  getCurrentPlayerRecord = (userId: string) =>
    this.db
      .collection("records")
      .doc(userId)
      .get()
      .then(doc => {
        if (doc.exists) {
          return doc.data();
        }
      });

  getPlayerRecords = () => this.db.collection("records").get();

  updatePlayerRecord = (updatedRecord: record[], userId: string) =>
    this.db
      .collection("records")
      .doc(userId)
      .update(updatedRecord);

  /* Clues and Responses */
  addClue = (clue: string, docId: string) =>
    this.db
      .collection("clues")
      .doc(docId)
      .set(clue);
}

export default Actions;
