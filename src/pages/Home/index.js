import api from '../../services/api';
import { useEffect, useState } from 'react';
import './home.css'
import Detalhes from '../Detalhes'


export default function Home(){
const [filmes, setFilmes] = useState([]);
const [filmSelect, setFilmSelect] = useState({});

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing?', {
                params:{
                    api_key:'4ef04af3acf5f3146be9a7c8051d9a7b',
                    language: 'pt-BR',
                    page: 1,
    
                }
            })
            setFilmes(response.data.results)
        }
        loadFilmes();
    },[]);

    useEffect(()=>{
        setFilmSelect(filmes[0]);
    }, [filmes]);
    

    //<img className='imgDetail' src={`https://image.tmdb.org/t/p/original${filmes[0].backdrop_path}`}/>
    
    return(
        <div className='contentHome'>
            <div className='details'>
                <Detalhes poster={filmSelect?.poster_path} filmID={filmSelect?.id} titulo={filmSelect?.title} nota={filmSelect?.vote_average} sinopse={filmSelect?.overview} lancamento={filmSelect?.release_date} imgBackground={filmSelect?.backdrop_path}/>
            </div>
            <div className="slider">
                {filmes.map(filme=>{
                    return(<article key={filme.id} value={filme.title} onClick={() => setFilmSelect(filme)}>
                        <img className='poster' src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}/>
                        <h3>{filme.title}</h3>
                    </article>)
                })}
            </div>
        </div>
    )
}