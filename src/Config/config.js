import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/storage';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCx8iylTair53Xe8OPTlt8C7BoyfH1HKgM",
    authDomain: "stveryeproject.firebaseapp.com",
    projectId: "stveryeproject",
    storageBucket: "stveryeproject.appspot.com",
    messagingSenderId: "975170005635",
    appId: "1:975170005635:web:2a47d511b03cde149109b6"
});

// Интерфейс для работы с хранилищем
const appStorage = firebase.storage();
// Интерфейс для работы с базой данных
const appDataBase = firebase.firestore();
// Время на сервере
const serverTime = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appDataBase, serverTime };