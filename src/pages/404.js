import { Grid } from "semantic-ui-react";
import Waves from "../Image/midle-waves.svg";
import { FiMeh } from "react-icons/fi";

export default function Erro404() {
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column style={{ background: "#006aff" }}>
          <div className="left-box-description">
            <div className="style-box-icons">
              {" "}
              <FiMeh color="#006aff" size="30" />{" "}
            </div>
            <h1 className="title-left-box">404</h1>
            <p className="font-description">
              Ops acho que não tem nada pra você aqui.
            </p>
          </div>
          <img
            draggable="false"
            src={Waves}
            alt="waves"
            style={{ position: "relative", float: "right", left: "1px" }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
