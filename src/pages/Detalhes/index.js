import './detalhes.css';
/* props{
    filmID,
    nota,
    titulo,
    imgBackground,
    sinopse,
    lancamento,
    poster,
}*/
export default function Detalhes(props){
    document.documentElement.style.setProperty('--background-image-url', `url(https://image.tmdb.org/t/p/original${props.imgBackground})`);

    function filmeSelecionado(){
        const listaFilmes = localStorage.getItem('favoritos');
        const filmes = JSON.parse(listaFilmes) || [];
        const hasFilms = filmes.some((filmeSalvo) => filmeSalvo.id === props.filmID)
        if(hasFilms){
            alert('Este filme já está nos favoritos.');
        }else{
            filmes.push({id: props.filmID, title: props.titulo, poster: props.poster})
            localStorage.setItem('favoritos', JSON.stringify(filmes));

            alert('Filme adicionado.');
        }


    }

    return(
        <div className='contentDetail'>
            <div className='gradiente'/>
            <div className='part1'>
                <h1 className='titulo'>{props.titulo}</h1>
                <p className='lancamento'>{props.lancamento}</p>
                <p className='nota'>Avaliação: {props.nota}</p>
            </div>
            <div className='part2'>
                <p className='sinopse'>{props.sinopse}</p>
                <a href={`https://www.youtube.com/results?search_query=${props.titulo}+trailer`} target='blank' className='btnTrailer'>Assistir trailer</a>
                <button onClick={()=>filmeSelecionado()} className='btnAdd'>Adicionar aos favoritos</button>
            </div>
        </div>
    )
}