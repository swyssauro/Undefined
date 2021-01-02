import { Grid } from 'semantic-ui-react';
import Waves from '../Image/midle-waves.svg';
import FormLogin from '../components/FormLogin';
import { VscPerson } from 'react-icons/vsc';

export default function Home() {

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column style={{ background: '#006aff' }}>
          <div className="left-box-description">
            <div className="style-box-icons"> <VscPerson color="#006aff" size="30" /> </div>
            <h1 className="title-left-box">Iniciar sessão</h1>
            <p className="font-description">Já possui uma conta? Faça login aqui.</p>
          </div>
          <img draggable="false" src={Waves} alt="waves" style={{ position: 'relative', float: 'right', left: '1px' }} />
        </Grid.Column>
        <Grid.Column>
          <FormLogin />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}