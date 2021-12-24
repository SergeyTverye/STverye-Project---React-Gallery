import React, { useEffect, useState} from 'react';
import useFirestore from "../Hooks/useFirestore";

const ImagesGrid = ({setSelectedImg}) => {

    const { docs } = useFirestore('images')
    const [pages,setPages] = useState(0) //количество страниц
    const [pagesNow,setPagesNow] = useState([]) //массив с номерами страниц
    const [imagesPerPage, setImagesPerPage] = useState([]) //массив с картинками текущей страницы
    const [CurrentPage, setCurrentPage] = useState(1) //текущая страница

    useEffect(() => {
        if(docs){
            setPages(Math.ceil(docs.length / 6))
            let pagesArray = []
            for(let i = 1; i < pages+1; i++){
                pagesArray.push(i)
            }
            setPagesNow(pagesArray);
            if(docs.length > 0) {
                let images = docs.filter((img,index)=>{
                    return index > CurrentPage*6-6-1 && index < CurrentPage*6
                })
            setImagesPerPage(images)
            }
        }
    }, [docs, pages, CurrentPage]);

    const setPage = (page) => {
        setCurrentPage(Number(page.page))
        //CurrentPage = page.page
    }

    return (
        <div>
            <div className="images-grid">
            { imagesPerPage && imagesPerPage.map(doc => (
                <div className='images-grid__img-wrapper'
                key={doc.id}
                onClick={()=> setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="some pic"/>
                </div>
            ))}
            </div>
            <div className="pagination">
            {pagesNow && pagesNow.map(page =>(<div className="pagination__page" onClick={()=>setPage({page})} key={page}>{page}</div>))}
            </div>
        </div>
    );
};

export default ImagesGrid;