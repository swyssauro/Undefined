/* import api from "../services/axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; */

export default function Home() {

    /*     const [perfil, setPerfil] = useState([]);
        const [list, setList] = useState([]);
        const params = useParams();
    
        useEffect(() => {
    
            api.get(`user/${params.username}`)
                .then(response => setPerfil(response.data[0]))
    
            api.get(`user/${params.username}/animes`)
                .then(response => setList(response.data))
        }, [params.username]); */

    return (
        <div class="grid-container">
            <div class="left-bar"></div>
            <div class="backdrop"></div>
            <div class="info-bar">
                <div class="avatar"></div>
                <div class="meta-info"></div>
            </div>
            <div class="painel"></div>
        </div>
    );
}