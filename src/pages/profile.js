
import { Grid } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import api from "../services/axios";
import { useParams } from "react-router-dom";
import Waves from '../Image/midle-waves.svg';
import Carousel from 'react-multi-carousel';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FiUser } from 'react-icons/fi';

export default function Profile() {

    const [perfil, setPerfil] = useState([]);
    const [list, setList] = useState([]);
    const params = useParams();

    useEffect(() => {

        api.get(`user/${params.username}`)
            .then(response => setPerfil(response.data[0]))

        api.get(`user/${params.username}/animes`)
            .then(response => setList(response.data))
    }, [params.username]);


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column style={{ background: '#006aff' }}>
                    <div className="left-box-description">
                        <div className="style-box-icons"> <FiUser color="#006aff" size="30" /> </div>
                        <h1 className="title-left-box">{perfil.username}</h1>
                        <p className="font-description">{perfil.description}</p>
                    </div>
                    <img draggable="false" src={Waves} alt="waves" style={{ position: 'relative', float: 'right', left: '1px' }} />
                </Grid.Column>
                <Grid.Column>
                <Carousel responsive={responsive}>
                        {list.map((lista, index) =>
                            <div key={index}>
                                <img draggable="false" src={`https://image.tmdb.org/t/p/original${lista.poster}`} alt="poster" />
                                <CircularProgressbar value={lista.rating} text={`${lista.rating}%`} />
                                <h1>{lista.title}</h1>
                            </div>
                        )}
                    </Carousel>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}