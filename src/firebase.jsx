import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChyXoe7Ox9HA7Mzcm_hcaXXsVCo1oNtVE",
  authDomain: "disney-clone-327b0.firebaseapp.com",
  projectId: "disney-clone-327b0",
  storageBucket: "disney-clone-327b0.appspot.com",
  messagingSenderId: "325174857949",
  appId: "1:325174857949:web:002890fe1307229f38cb34",
  measurementId: "G-DHCVR67MNV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

export { app, analytics, db, auth, storage, googleProvider };
