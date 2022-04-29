import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDfWt9sckAzTkbNCxfGJxDwK-th4dYdPDg",
    authDomain: "savethedate-5143b.firebaseapp.com",
    projectId: "savethedate-5143b",
    storageBucket: "savethedate-5143b.appspot.com",
    messagingSenderId: "374197179095",
    appId: "1:374197179095:web:0a257fec9864bf16f8d692"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);