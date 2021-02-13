import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd3WQgcQFsRUeseCfhQUfo7vVkSktZs4Q",
    authDomain: "ihelp-38e4c.firebaseapp.com",
    projectId: "ihelp-38e4c",
    storageBucket: "ihelp-38e4c.appspot.com",
    messagingSenderId: "557679575302",
    appId: "1:557679575302:web:3ad047e8fd99eeb75f5e87",
    measurementId: "G-S4MPCNR17S"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (
      collectionKey,
      objectsToAdd
    ) => {
      
      try {
        const collRef = firebase.firestore().collection(collectionKey);
        const batch = firebase.firestore().batch();

        objectsToAdd.forEach(obj => {
          const docRef = collRef.doc();
          batch.set(docRef, obj)
        })
        return await batch.commit();
      } catch (error) {
        console.log(error)
      }
     

};
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;