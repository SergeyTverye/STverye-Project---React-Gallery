import React from 'react';
import useFirestore from "../Hooks/useFirestore";

const ImagesGrid = ({setSelectedImg}) => {

    const { docs } = useFirestore('images')
    //console.log(docs)

    return (
        <div className="images-grid">
            { docs && docs.map(doc => (
                <div className='images-grid__img-wrapper'
                key={doc.id}
                onClick={()=> setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="some pic"/>
                </div>
            ))}
        </div>
    );
};

export default ImagesGrid;