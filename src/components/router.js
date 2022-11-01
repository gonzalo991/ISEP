import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './views/home';
import Institucional from './views/institucional';
import Carreras from './views/carreras';
import Noticias from './views/noticias';
import Carrera from './fragments/carrera';
import Inscripciones from './views/inscripciones';


function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/institucional' element={<Institucional />} />
            <Route path='/carreras' element={<Carreras />}>
                <Route path=':carrera' element={<Carrera />}></Route>
            </Route>
            <Route path='/noticias' element={<Noticias />} />
            <Route path='/inscripciones' element={<Inscripciones />} />
        </Routes>
    )

}

export default Router;