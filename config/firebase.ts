import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCteUdjlm0XuvvE9iNlBGr5dTvRXzGZWUo",
    authDomain: "fightclub-5c00c.firebaseapp.com",
    projectId: "fightclub-5c00c",
    storageBucket: "fightclub-5c00c.firebasestorage.app",
    messagingSenderId: "379517407120",
    appId: "1:379517407120:web:43bd50118b6d17ea8bed15",
    measurementId: "G-H8DD82TYDP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
