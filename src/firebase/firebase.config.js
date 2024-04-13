// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvysZm_BF-7oT8RcdQpIFdOyifHKjhh1E",
    authDomain: "dragon-news-b98f2.firebaseapp.com",
    projectId: "dragon-news-b98f2",
    storageBucket: "dragon-news-b98f2.appspot.com",
    messagingSenderId: "716451792239",
    appId: "1:716451792239:web:2b5d3c1a18827777e5949a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;