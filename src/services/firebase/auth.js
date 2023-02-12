import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebase from "./firebase";

const auth = getAuth(firebase);
const db = getFirestore(firebase);

export const signUpUser = async (data) => {
  try {
    const { email, password, name, contact } = data;
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, {
      displayName: name,
      phoneNumber: contact,
    });

    const { uid } = user;
    await setDoc(doc(db, "users", uid), {
      contact,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const isUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) resolve(true);
      reject(false);
    });
  });
};

export const getUserProfile = () => auth.currentUser;
