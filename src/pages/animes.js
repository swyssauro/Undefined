import api from "../services/axios";
import ErroPage from '../pages/404';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Animes() {

    const [ anime, setAnimes ] = useState([]);
    const params = useParams();

    useEffect(() => {
        api.get(`anime/${params.nome}`)
            .then(response => setAnimes(response.data))
    }, [params.nome]);

    if (!anime) {
        return <ErroPage />;
    }

    return(
        <div>
             <h3>{anime.title}</h3>
             <h3>{anime.sinopse}</h3>
             <h3>{anime.duration}</h3>
             <h3>{anime.rating}</h3>
             <h3>{anime.data}</h3>
             <h3>{anime.follow}</h3>
        </div>
    );
}