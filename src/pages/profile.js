import api from "../services/axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Avatar from '../Image/avatar.svg';
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
            <div className="left-bar"></div>
            <div className="backdrop"></div>
            <div className="info-bar">
                <div className="avatar">
                    <img className="avatar-img" draggable="false" src={Avatar} alt="avatar" />
                </div>
                <div className="meta-info">
                    <h3 className="title-perfil">{perfil.username}</h3>
                    <p className="description-perfil">{perfil.description}</p>
                </div>
            </div>
            <div className="painel">
                {list.map((lista, index) =>
                    <h1 key={index}>{lista.title}</h1>
                )}
            </div>
        </div>
    );
}