import * as firebase from 'firebase'
import 'firebase/firestore';

export function setupFirebase() {
    let firebaseConfig = {
        apiKey: "AIzaSyCl2Nd0LvQM1U8T88YajRfk1kRYO4iInG8",
        authDomain: "cnh-mobile-app-57295.firebaseapp.com",
        databaseURL: "https://cnh-mobile-app-57295.firebaseio.com",
        projectId: "cnh-mobile-app-57295",
        storageBucket: "cnh-mobile-app-57295.appspot.com",
        messagingSenderId: "963990693354",
        appId: "1:963990693354:web:b6a729fc40d38e29ae7e93",
        measurementId: "G-1P16JDQ8TE"
    };
      
    firebase.initializeApp(firebaseConfig);
}

export async function sendData(collection, data) {
    let db = firebase.firestore();
    try {
        let docRef = await db.collection(collection).add(data);
        console.log("Document written with ID: ", docRef.id);
    } catch(error) {
        console.error("Error adding document: ", error);    
    }
}

export async function getData(collection) {
    data = [];

    let db = firebase.firestore();
    let querySnapshot = await db.collection(collection).get();
    querySnapshot.forEach(doc => data.push(doc.data()));

    return data;
}

export async function getOrderedData(collection, criteria, direction) {
    data = [];

    let db = firebase.firestore();
    let querySnapshot = await db.collection(collection).orderBy(criteria, direction).get();
    querySnapshot.forEach(doc => data.push(doc.data()));

    return data;
}

