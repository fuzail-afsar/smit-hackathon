import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  WithFieldValue,
} from "firebase/firestore";
import firebase from "../firebase";

const db = getFirestore(firebase);

export const getAllDocsByCollection = async (doc, callback) => {
  try {
    const querySnapshot = await getDocs(collection(db, doc));
    querySnapshot.forEach((doc) => {
      callback(doc);
    });
  } catch (error) {
    throw error;
  }
};

export const setDocByCollection = async (doc, data) => {
  try {
    return await addDoc(collection(db, doc), data);
  } catch (error) {
    throw error;
  }
};
