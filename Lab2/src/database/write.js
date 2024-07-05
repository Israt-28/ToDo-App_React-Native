import { collection, addDoc, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), data)
        return docRef.id;

    } catch (e) {
        return null
    }

}

export async function update(id, data) {
    try {
        const docRef = doc(db, "tasks", id)
        await updateDoc(docRef, data);
        return true;

    } catch (e) {
        return false;
    }

}

export async function removeData(id) {
    try {
        const docRef = doc(db, "tasks", id);
        await deleteDoc(docRef)
        return true;
    } catch (e) {
        return false;

    }

}


