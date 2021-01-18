import "./style.css";
import FormLogin from "../../components/FormLogin";
import BoxIcon from "../../components/BoxIcons";
import { FiUser } from "react-icons/fi";

export default function SignIn() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="col col1">
          <BoxIcon
            icon={<FiUser color="#006aff" size={30} />}
            title="Iniciar Sessão"
            redirect="sign-up"
            description="Já possui uma conta Faça o login aqui"
          />
        </div>

        <div className="col col2">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
