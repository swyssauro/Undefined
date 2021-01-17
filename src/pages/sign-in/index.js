
import FormLogin from "../../components/FormLogin/";
import './style.css'
import { FiUser } from "react-icons/fi";

export default function SignIn() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="col col1">
          <div>
          <div className="styles-box-icons">
            <FiUser color="#006aff" size={30}/>
          </div>
            <h1>Iniciar Sessão</h1>
            <p className="text-sign">Já possui uma conta? <u>Faça o login aqui</u></p>
          </div>
      </div>

      <div className="col col2">
        <FormLogin/>
      </div>
      </div>
    </div>
  );
}
