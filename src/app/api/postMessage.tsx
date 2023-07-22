import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "@/app/service/firebaseService";

const firestore = getFirestore(app);

export default async function postMessage(req : any, res :any) {
    console.log(req);

    // if (req.method === "POST") {
    //     const { data } = req.body;


    try {
        req.date=new Date().toLocaleString();
            const docRef = await addDoc(collection(firestore, "message"), req);
            return {'code':200, 'message' : 'Your message has been sent successfully! I will respond promptly. Thank you for reaching out!'};
            // res.status(200).json({ id: docRef.id, ...req });
        } catch (error) {
            res.status(500).json({ error: "Failed to add document" });
        }
    // } else {
    //     res.status(405).json({ error: "Method not allowed" });
    // }
}
