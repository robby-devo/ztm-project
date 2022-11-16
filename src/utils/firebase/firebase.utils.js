// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
  

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBJxVolqW1rspbDlVIiX6iWDhajaziM4eE",
  
    authDomain: "crwn-clothing-db-c424b.firebaseapp.com",
  
    databaseURL: "https://crwn-clothing-db-c424b-default-rtdb.firebaseio.com",
  
    projectId: "crwn-clothing-db-c424b",
  
    storageBucket: "crwn-clothing-db-c424b.appspot.com",
  
    messagingSenderId: "233432361204",
  
    appId: "1:233432361204:web:28f98b7f7e92e0572bd6a1"
  
  };
  


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
