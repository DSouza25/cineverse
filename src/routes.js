import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Favoritos from '../src/pages/Favoritos'
import Header from './components/Header';
import Error from './pages/Error';
import Detalhes from './pages/Detalhes'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
                <Route path='/detalhes' element={<Detalhes/>}/>


                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}