import { useEffect, useState } from 'react'
import './favoritos.css'

export default function Favoritos(){
    const [fav, setFav] = useState([])
    useEffect(()=>{
        const listaFilmes = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFav(listaFilmes);
    }, [])

    function removerDaLista(id){
        const filmeParaRemover = fav.filter((filme)=>{
             return filme.id !== id
        })

        const teste = filmeParaRemover;
        setFav(teste);
        localStorage.setItem('favoritos', JSON.stringify(teste));
    }

    return(
        <div className='favContent'>
            {fav.map((filme)=>{
                return(
                    <article className='favArticle' key={filme.id}>
                        <img className='posterFav' src={`https://image.tmdb.org/t/p/original${filme.poster}`} alt={filme.title}/>
                        <div className='posterGradiente'></div>
                        <h3>{filme.title}</h3>
                        <button className='btnRemove' title='Remover dos favoritos?' onClick={()=>removerDaLista(filme.id)}>X</button>
                    </article>
                )
            })}
        </div>
    )
}