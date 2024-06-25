import {initializeApp} from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfaYsA51GoOvGJ_-uA4E_KAmgOfacBYkY",
  authDomain: "resume-ai-4569c.firebaseapp.com",
  projectId: "resume-ai-4569c",
  storageBucket: "resume-ai-4569c.appspot.com",
  messagingSenderId: "582621294569",
  appId: "1:582621294569:web:506d5e4613b96786212578",
  measurementId: "G-29YE29WLGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);