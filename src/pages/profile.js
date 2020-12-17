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
        <div className="grid-container">
            <div className="backdrop"></div>
            <div className="leftbar"></div>
            <div className="itens-info"><h3>{perfil.username}</h3><br/><p>{perfil.description}</p></div>
            <div className="painel">
                {list.map((lista, index) =>
                <li key={index}>{lista.title}</li>
                )}
            </div>
            <div className="avatar"></div>
        </div>
    );
}