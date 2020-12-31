
import api from "../services/axios";
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Popup } from 'semantic-ui-react'

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
                    <Popup
          trigger={ <img draggable="false" src={`https://image.tmdb.org/t/p/original${lista.poster}`} alt="poster" />}
          content={
              <div>
                  <h1>{lista.title}</h1>
                  <CircularProgressbar value={lista.rating} text={`${lista.rating}%`} />
              </div>
          } position='right center'/>
                </div>
            )}
        </div>
    )
}