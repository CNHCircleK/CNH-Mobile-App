import * as firebase from 'firebase'
import 'firebase/functions';
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

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export async function sendData(collection, data) {
    let db = firebase.firestore();
    try {
        let docRef = await db.collection(collection).add(data);
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch(error) {
        console.error("Error adding document: ", error);
        return false;
    }
}

export async function appendSheet(){
    var addMessage = firebase.functions().httpsCallable('gsheets-append');
    addMessage({ })
        .then((result) => {
            // Read result of the Cloud Function.
            var sanitizedMessage = result.data.text;
        });
}

/******
Retrieve array of documents from Firestore
If criteria and fields in query are different, an index must be made in Firestore. The error will provide a link to create an index.
collection:string - Name of collection in Firestore
criteria:string - Property of document to be ordered by
direction:string - Direction of document order. Can be 'asc' or 'desc'
limit:number - Number of documents needed from beginning of array
query:array<object> - Array of query restrictions. Restrictions are objects in the format { field: nField, op: nOp, value: nValue }
return - Array of document objects
******/
export async function getData(collection, criteria, direction, limit, query) {
    let data = [];
    let db = firebase.firestore();

    let dbData = db.collection(collection);
    query?.forEach(filter => {
        dbData = dbData.where(filter.field, filter.op, filter.value);
    });
    dbData = criteria ? dbData.orderBy(criteria, direction || 'asc') : dbData;
    dbData = limit ? dbData.limit(limit) : dbData;

    let querySnapshot = await dbData.get();
    querySnapshot.forEach(doc => {
        data.push(doc.data())
    });

    return data;
}
