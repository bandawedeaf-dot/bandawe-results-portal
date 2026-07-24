// ================= FIREBASE IMPORTS =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, deleteDoc, addDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// ================= FIREBASE CONFIG =================
const firebaseConfig = {
    apiKey: "AIzaSyDUny1WaUaMeUgLLsUrFckhQAIoCwDHX-c",
    authDomain: "bandawe-results-portal.firebaseapp.com",
    projectId: "bandawe-results-portal",
    storageBucket: "bandawe-results-portal.firebasestorage.app",
    messagingSenderId: "558408212445",
    appId: "1:558408212445:web:f93a5d74b74010ebdee034",
    measurementId: "G-CKERZYKZWT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
