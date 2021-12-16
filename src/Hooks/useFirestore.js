import {useState, useEffect} from "react";
import  {appDataBase} from "../Config/config";

const useFirestore = (collection) => {

    const [docs, setDocs] = useState()


    useEffect(() => {
        const unsub = appDataBase.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                let documents = [];
                snapshot.forEach(document => {
                    documents.push({...document.data(), id: document.id})
                })
                setDocs(documents)
            })
        return () => unsub();
    }, [collection])


    return { docs}


}

export default useFirestore;