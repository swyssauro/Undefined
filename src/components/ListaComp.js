
import api from "../services/axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { CircularProgressbar } from 'react-circular-progressbar';

import { useParams } from "react-router-dom";

export default function Lista() {
    const [list, setList] = useState([]);
    const params = useParams();

    useEffect(() => {
        api.get(`user/${params.username}/animes`)
            .then(response => setList(response.data))
    }, [params.username]);

    return (
        <div>
             {list.map((lista, index) =>
               <Link key={index} to={`anime/${lista.title}`}><img style={{ height: '20pc', borderRadius: '7px' }} draggable="false" src={`https://image.tmdb.org/t/p/original${lista.poster}`} alt="poster" /></Link>
            )}
        </div>
    )
}