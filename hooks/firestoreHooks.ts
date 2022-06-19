import { useState, useEffect } from 'react';
import {DB} from '../firebase/firebase';
import { collection, getDocs, addDoc, QuerySnapshot, CollectionReference, DocumentReference } from "firebase/firestore";



export const useFirestore =  (collectionPath:string) => {
    const [docs, setDocs] = useState < null| QuerySnapshot>(null);
    useEffect(() => {
        async function getData() {
            const collectionReference: CollectionReference = collection(DB, collectionPath);
            const querySnapshot = await getDocs(collectionReference);
            setDocs(querySnapshot);
        }   
        if(!docs) getData();
    }, [docs, collectionPath]);
    

    return docs;
}


/* 
@param {string} collection name
@return {object} doc snapshot created in firestore
@return {function} setData to save data in collection
@return {object} error if any
@description This function is used to create a new collection in firestore
*/
export const useFirestoreAdd =  (collectionPath: string) => {
    const [docs, setDocs] = useState < null| DocumentReference>(null);
    const [error, setError] = useState<any>(null);
   
    async function setData(data: String) {
        try {
            const collectionReference: CollectionReference = collection(DB, collectionPath);
            const docRef = await addDoc(collectionReference, data);
            setDocs(docRef);
          
          } catch (e:any) {
            setError(e);
          }
        }   

    return [docs, setData, error];
}