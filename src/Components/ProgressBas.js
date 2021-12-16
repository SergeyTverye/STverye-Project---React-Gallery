import React, {useEffect} from 'react';
import useStorage from "../Hooks/useStorage";

const ProgressBas = ({file, setFile}) => {

    const {url, progress } = useStorage(file)
    console.log(progress, url)

    useEffect(()=> {
        // Если вернулся url адрес, то сбросить состояние файла,
        // чтобы убрать прогресс-бар
        if (url) {
            setFile(null)
        }

    }, [url, setFile])

    return (
        <div className='progress-bar'
        style={{width: progress + '%'}}
        >
        </div>
    );
};

export default ProgressBas;