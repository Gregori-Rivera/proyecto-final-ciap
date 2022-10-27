import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, getDocs, doc, deleteDoc, runTransaction, query, where } from "firebase/firestore";
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
      banks:[],
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
        {
          title: "Eliminar información",
          background: "white",
          initial: "white",
          link: "/eliminar/",
        },
        {
          title: "Modificar información",
          background: "white",
          initial: "white",
          link: "/modificar/",
        },
        {
          title: "Gráficos adicionales",
          background: "white",
          initial: "white",
          link: "/graficos/",
        },
      ],
			
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getBanks: async () => {
        const banksCol = collection(db, "banks");
        const bankSnapshot = await getDocs(banksCol);
        const bankList = bankSnapshot.docs.map((doc) => doc.data());
        setStore({banks:bankList});
      },

      addBank: async (bank) => {
        try {
          const docRef = await addDoc(collection(db, "banks"), bank);
          console.log("Document written with ID: ", docRef.id);
          getActions().getBanks();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },

      deleteBank: async (bank) => {
        const banksRef = collection(db, "banks");
        const q = query(banksRef, where("aba", "==", bank.aba), where("puerto", "==", bank.puerto));
        const querySnapshot = await getDocs(q);
        const idSelected = querySnapshot.docs.map((doc) => doc.id);
        for(let i = 0; i < idSelected.length; i++){
          const sfDocRef = doc(db, "banks", idSelected[i]);
          try {
            await runTransaction(db, async (transaction) => {
              const sfDoc = await transaction.get(sfDocRef);
              if (!sfDoc.exists()) {
                throw "Document does not exist!";
              }
          
              await deleteDoc(doc(db, "banks", idSelected[i]));
              getActions().getBanks();
            });
            console.log("Transaction successfully committed!");
          } catch (e) {
            console.log("Transaction failed: ", e);
          }
        }
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
