// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Xq-ko8auZppQv8vA6JTstqX4m8fOkow",
  authDomain: "new1-b7cb5.firebaseapp.com",
  projectId: "new1-b7cb5",
  storageBucket: "new1-b7cb5.appspot.com",
  messagingSenderId: "781157043927",
  appId: "1:781157043927:web:33d9dfa241b022cb76aa92",
  measurementId: "G-KDL338R80D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyATeGUnUrG1EEphDi-ZQZnEXle0rOYJDb8",
//     authDomain: "apache-2b6c9.firebaseapp.com",
//     projectId: "apache-2b6c9",
//     storageBucket: "apache-2b6c9.appspot.com",
//     messagingSenderId: "290191644000",
//     appId: "1:290191644000:web:11e0130c5aca9dc25e3a05"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
