import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsKyRA-YW29Ox2qFAD1e2y7hhfsC3Ct_E",
    authDomain: "crwn-clothing-db-adc09.firebaseapp.com",
    projectId: "crwn-clothing-db-adc09",
    storageBucket: "crwn-clothing-db-adc09.appspot.com",
    messagingSenderId: "735959100",
    appId: "1:735959100:web:a51230b2cc0fd53f284b39"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider =  new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);