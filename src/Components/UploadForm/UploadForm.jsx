import React, {useState} from 'react';
import ProgressBar from "../ProgressBar";

const UploadForm = () => {

   const fileInput = React.createRef();
   // Состояния для вывода имени файла или ошибки
   const [file, setFile] = useState(null);
   const [error, setError] = useState(null)

   // Список допустимых для загрузки форматов
   const allowedTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp']

    const changeHandler = (e) => {
        let selectedFile = fileInput.current.files[0];
        if (selectedFile && allowedTypes.includes(selectedFile.type)){
            setFile(selectedFile)
            setError('')
        } else {
            setFile(null);
            setError('Invalid format. Please choose .jpg or .png image')
        }
   }

    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler} ref={fileInput}/>
            <span>+</span>
        </label>
            <div className="output">
                { error && <div className="error"> {error} </div>}
                { file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    );
};

export default UploadForm;