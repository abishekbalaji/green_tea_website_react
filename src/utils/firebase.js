import { initializeApp } from "firebase/app";

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWl6ElLQ2y_mylH0jbd1Mqoak_wQTUp30",
  authDomain: "green-tea-react.firebaseapp.com",
  projectId: "green-tea-react",
  storageBucket: "green-tea-react.appspot.com",
  messagingSenderId: "618092760089",
  appId: "1:618092760089:web:d89f810e4beb4436e5ee88",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const userSignInWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const createAuthUserWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const signOutUser = async () => await signOut(auth);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionInfo = {}
) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName = "", email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionInfo,
      });
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }
  return userRef;
};
