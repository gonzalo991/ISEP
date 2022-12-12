import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsList from "../fragments/newsList";
import Pagination from '../fragments/pagination';
import '../css/noticias.css';


function Noticias() {

    const [news, setNews] = useState([]);
    const [newsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    //Conseguir las noticias actuales
    const indexOfLastNew = Math.round((currentPage - 1) * newsPerPage + newsPerPage);
    const indexOfFirstNew = Math.round((currentPage - 1) * newsPerPage);
    const currentNews = news.slice(indexOfFirstNew, indexOfLastNew);


    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/noticias");
            const news = await response.json();
            setNews(news);
        })()
    }, []);

    //Cambiar paginas
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="titulo-noticias">
                <h1>Noticias y Anuncios</h1>
                <hr></hr>
            </div>

            <NewsList newsArray={currentNews} />
            <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate} />


        </>

    )
}

export default Noticias;