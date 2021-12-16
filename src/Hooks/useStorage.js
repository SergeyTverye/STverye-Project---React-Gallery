import { useState, useEffect} from "react";
import {appStorage, appDataBase, serverTime} from "../Config/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storage  = appStorage.ref(file.name);
        const imagesList = appDataBase.collection('images')

        storage.put(file).on('state_changed', (snap) =>
        {
            let percents = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percents)
        }, (error) => {
            setError(error)
        }, async () => {
                const url = await storage.getDownloadURL();
                imagesList.add({url, createdAt: serverTime()})
                setUrl(url)
            }
            );
    }, [file])

    return {progress, url, error}
}

export default useStorage;