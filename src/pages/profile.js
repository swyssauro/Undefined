import api from "../services/axios";
import ErroPage from "../pages/404";
import Waves from "../Image/midle-waves.svg";

import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";

import ListaComp from "../components/ListaComp";
import ListaFav from "../components/ListaFav";

export default function Profile() {
  const [perfil, setPerfil] = useState([]);
  const params = useParams();

  useEffect(() => {
    api
      .get(`user/${params.username}`)
      .then((response) => setPerfil(response.data[0]));
  }, [params.username]);

  if (!perfil) {
    return <ErroPage />;
  }

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column style={{ background: "#006aff" }}>
          <div className="left-box-description">
            <div className="style-box-icons">
              {" "}
              <FiUser color="#006aff" size="30" />{" "}
            </div>
            <h1 className="title-left-box">{perfil.username}</h1>
            <p className="font-description">{perfil.description}</p>
          </div>
          <img
            draggable="false"
            src={Waves}
            alt="waves"
            style={{ position: "relative", float: "right", left: "1px" }}
          />
        </Grid.Column>
        <Grid.Column>
          <ListaComp />
          <ListaFav />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
