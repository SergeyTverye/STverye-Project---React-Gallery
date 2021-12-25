import React, {useEffect} from 'react';
import useStorage from "../Hooks/useStorage";

const ProgressBar = ({file, setFile}) => {

    const {url, progress } = useStorage(file)

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

export default ProgressBar;