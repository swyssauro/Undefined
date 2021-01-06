import { Grid } from "semantic-ui-react";
import { FiMap } from "react-icons/fi";
import Fistpost from "../components/FistPost";
import Waves from "../Image/midle-waves.svg";

const UserName = localStorage.getItem("username");

export default function Welcome() {
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column style={{ background: "#006aff" }}>
          <div className="left-box-description">
            <div className="style-box-icons">
              <FiMap color="#006aff" size="30" />
            </div>
            <h1 className="title-left-box">
              welcome
              <br />
              <b className="title-welcome">{UserName}</b>
            </h1>
            <p className="font-description">
              criamos essa pagina para dar boas vindas a você.
            </p>
          </div>
          <img
            draggable="false"
            src={Waves}
            alt="waves"
            style={{ position: "relative", float: "right", left: "1px" }}
          />
        </Grid.Column>
        <Grid.Column>
          <Fistpost />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
