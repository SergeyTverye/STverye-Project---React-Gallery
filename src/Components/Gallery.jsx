import React, { useState} from 'react';
import UploadForm from "./UploadForm/UploadForm";
import ImagesGrid from "./ImagesGrid";
import Modal from "./Modal";

const Gallery = () => {
    const  [selectedImg, setSelectedImg] = useState(null)

    return (

        <div>
            <div className="gallery__title">
                <h2>Some Pictures</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <UploadForm/>
            <ImagesGrid setSelectedImg={setSelectedImg}/>
            {selectedImg &&
            <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}/>}
        </div>
    );
};

export default Gallery;