// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJrkEaEXAOlcvpJ-hhPBRH5EMcDJ687pg",
  authDomain: "restaurante-2e836.firebaseapp.com",
  projectId: "restaurante-2e836",
  storageBucket: "restaurante-2e836.appspot.com",
  messagingSenderId: "799060678335",
  appId: "1:799060678335:web:102ab0fb9ac5a54705180a"
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export  {app,auth};