import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "portfolio-fa60d.firebaseapp.com",
  databaseURL: "https://portfolio-fa60d-default-rtdb.firebaseio.com/",
  projectId: "portfolio-fa60d",
  storageBucket: "portfolio-fa60d.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);