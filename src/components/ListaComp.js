
import api from "../services/axios";
import { useEffect, useState } from 'react';
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
            { list.map((lista, index) =>
                <div key={index}>
                    <img draggable="false" src={`https://image.tmdb.org/t/p/original${lista.poster}`} alt="poster" />
                </div>
            )}
        </div>
    )
}