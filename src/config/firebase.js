import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const db = firebase.firestore();
export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
