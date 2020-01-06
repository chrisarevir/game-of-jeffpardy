import React from "react";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    // this.auth.setPersistence("local");

    this.db = app.firestore();
  }

  /*****************
   **** Auth API ****
   *****************/

  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  resetPassword = email => this.auth.sendPasswordResetEmail(email);
  updatePassword = password => this.auth.currentUser.updatePassword(password);

  getCurrentUser = () =>
    new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          resolve({});
        }
      });
    });

  /******************
   **** Firestore ****
   ******************/

  /* Records */
  addPlayerRecord = (record, userId) =>
    this.db
      .collection("records")
      .doc(userId)
      .set(record);

  updatePlayerRecord = (updatedRecord, userId) =>
    this.db
      .collection("records")
      .doc(userId)
      .update(updatedRecord);

  getPlayerRecords = () => this.db.collection("records").get();

  getCurrentPlayerRecord = userId =>
    this.db
      .collection("records")
      .doc(userId)
      .get()
      .then(doc => {
        if (doc.exists) {
          return doc.data();
        }
      });

  /* Clues and Responses */

  addClue = (clue, docId) =>
    this.db
      .collection("clues")
      .doc(docId)
      .set(clue);

  getClues = () => this.db.collection("clues").get();

  getClueForSelectedDay = docId =>
    this.db
      .collection("clues")
      .doc(docId)
      .get()
      .then(doc => doc.data());

  addResponse = (response, docId) =>
    this.db
      .collection("responses")
      .doc(docId)
      .set(response);

  getResponses = () => this.db.collection("responses").get();

  getResponseForSelectedDay = docId =>
    this.db
      .collection("responses")
      .doc(docId)
      .get()
      .then(doc => doc.data());
}

export default Firebase;
