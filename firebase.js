import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8889nmGxkCZRrAkM_HKj43-_uS9SPiws",
  authDomain: "netflix-clone-1fedc.firebaseapp.com",
  projectId: "netflix-clone-1fedc",
  storageBucket: "netflix-clone-1fedc.appspot.com",
  messagingSenderId: "314772135979",
  appId: "1:314772135979:web:4b4ba8d6dc1a850adf4a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the auth instance

export { auth }; // Export the auth instance for use in other parts of your app
export default app;