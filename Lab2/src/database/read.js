import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function load() {
    console.log('Data Loaded')
    const querySnapshot = await getDocs(collection(db, "tasks"))
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        })

    })

    return data;

}





