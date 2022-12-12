import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Carreras from './views/carreras';
import Noticias from './views/noticias';
import Carrera from './fragments/carrera';
import Inscripciones from './views/inscripciones';
import Noticia from './fragments/noticia';


function Router() {

    return (
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/carreras' element={<Carreras />}>
                <Route path=':carrera' element={<Carrera />}></Route>
            </Route>
            <Route exact path='/noticias'  element={<Noticias />}>
                <Route path=':id' element={<Noticia />}></Route>
            </Route>
            <Route exact path='/inscripciones' element={<Inscripciones />} />
            {/**  <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )

}

export default Router;