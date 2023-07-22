import {getFirestore, collection, addDoc, getDocs} from "firebase/firestore";
import app from "@/app/service/firebaseService";

const firestore = getFirestore(app);


export default async function getMessage(req :any, res :any) {
    const snapshot = await getDocs(collection(firestore, "message"));

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    res.status(200).json(data);
}
