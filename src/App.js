import left_background from './Image/Background.svg';
import './global.css';
import { useForm } from "react-hook-form";
import api from "./services/axios";
import { FiCornerDownRight } from 'react-icons/fi';

export default function App() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
      await api.post('auth', data)
        .then(response => console.log(response.data))
    }  

  return (
    <div className="container">
      <div className="left-bg">
        <div className="box-left"></div>
        <img src={left_background} alt="background" draggable="false" />
        <div className="container-form">
          <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '18.3vh 161px'}}>
            <p className="input-text">username</p>
            <input name="email" className="input-login" type="text" autoComplete="off" ref={register} />
            <p className="input-text">password</p>
            <input name="password" className="input-login" type="password" autoComplete="off" ref={register} />
            <div className="div-submit"><button type="submit" className="button-submit"><FiCornerDownRight size={20} color="#FFF" /></button></div>
          </form>
        </div>
      </div>
    </div>
  );
}