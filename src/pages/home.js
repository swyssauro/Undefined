import api from "../services/axios";
import { useForm } from "react-hook-form";
import left_background from '../Image/Background.svg';
import { FiCornerDownRight, FiMenu } from 'react-icons/fi';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await api.post('auth', data)
      .then(response => console.log(response.data))
  }

  return (
    <div class="grid-container">
      <div class="left-bar"></div>
      <div class="container">
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '18.3vh 161px' }}>
          <h1 className="title-login">Login</h1>
          <p className="input-text">username</p>
          <input name="email" className="input-login" type="text" autoComplete="off" ref={register} />
          <p className="input-text">password</p>
          <input name="password" className="input-login" type="password" autoComplete="off" ref={register} />
          <div className="div-submit"><button type="submit" className="button-submit"><FiCornerDownRight size={20} color="#FFF" /></button></div>
        </form>
      </div>
      <div class="descripton"></div>
    </div>
  );
}