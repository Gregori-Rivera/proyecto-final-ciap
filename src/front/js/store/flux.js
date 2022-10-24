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
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      nav_items: [
        {
          title: "Mostrar información",
          background: "white",
          initial: "white",
          link: "/single/",
        },
        {
          title: "Agregar información",
          background: "white",
          initial: "white",
          link: "/agregar/",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getCities: async () => {
        const citiesCol = collection(db, "users");
        const citySnapshot = await getDocs(citiesCol);
        console.log(citySnapshot);
        const cityList = citySnapshot.docs.map((doc) => doc.data());
        return cityList;
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      // changeColor: (index, color) => {
      // 	//get the store
      // 	const store = getStore();

      // 	//we have to loop the entire demo array to look for the respective index
      // 	//and change its color
      // 	const demo = store.demo.map((elm, i) => {
      // 		if (i === index) elm.background = color;
      // 		return elm;
      // 	});

      // 	//reset the global store
      // 	setStore({ demo: demo });
      // }
    },
  };
};

export default getState;
