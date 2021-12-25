import {useState, useEffect} from "react";
import  {appDataBase} from "../Config/config";

const useFirestore = (collection, desc='desc') => {

    const [docs, setDocs] = useState()


    useEffect(() => {
        appDataBase.collection(collection)
            .orderBy('createdAt', desc)
            .onSnapshot(
                (snapshot) => {
                    let documents = [];
                    snapshot.forEach(document => {
                        documents.push({...document.data(), id: document.id})
                    })
                    setDocs(documents)
            })
    }, [collection, desc])


    return { docs}


}

export default useFirestore;