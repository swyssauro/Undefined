import api from "../services/axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function Home() {

    const [perfil, setPerfil] = useState([]);
    const [list, setList] = useState([]);
    const params = useParams();

    useEffect(() => {

        api.get(`user/${params.username}`)
            .then(response => setPerfil(response.data[0]))

        api.get(`user/${params.username}/animes`)
            .then(response => setList(response.data))
    }, [params.username]);

    return (
        <>
            <h3 className="title-perfil">{perfil.username}</h3>
            <p className="description-perfil">{perfil.description}</p>
            {list.map((lista, index) =>
                <h1 key={index}>{lista.title}</h1>
            )}
        </>
    );
}