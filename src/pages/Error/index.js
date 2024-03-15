import {Link} from 'react-router-dom';

export default function Error(){
    return(
        <div>
            <h1>Página não encontrada</h1>
            <Link to='/'>Volte para a página inicial</Link>
        </div>
    )
}