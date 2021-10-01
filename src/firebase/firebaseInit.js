import fb from "firebase/app";
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyAqEB_Wny0_JRdc4cSUEN-95-yoxTNqxXc",
  authDomain: "infor-1216b.firebaseapp.com",
  projectId: "infor-1216b",
  storageBucket: "infor-1216b.appspot.com",
  messagingSenderId: "388300071393",
  appId: "1:388300071393:web:3f4535b76ed8365304f2a0",
  measurementId: "G-PTGTE9K1YF"
};

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()