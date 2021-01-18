import api from "../../services/axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FiCornerDownRight, FiUser } from "react-icons/fi";

import "./style.css";

export default function FormLogin() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await api.post("auth", data).then((response) => {
      const { data } = response;
      console.log(data);

      if (data) {
        localStorage.setItem("crypto", data.crypto);
        localStorage.setItem("username", data.username);
        history.push(`/${data.username}`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title-login">Iniciar sessão</h1>
      <hr />
      <ErrorMessage errors={errors} name="email" />
      <div className="input-icon">
        <div type="email" className="box-icon">
          <FiUser className="icon-style-input" />
        </div>
        <input
          autoComplete="off"
          placeholder="email"
          style={{ width: "328.98px" }}
          name="email"
          className="input-login"
          type="email"
          ref={register({
            required: <p className="p-error-box">email is required</p>,
          })}
        />
      </div>
      <hr />
      <ErrorMessage errors={errors} name="password" />
      <input
        autoComplete="off"
        style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
        placeholder="password"
        name="password"
        className="input-login"
        type="password"
        ref={register({
          required: <p className="p-error-box">password is required</p>,
        })}
      />
      <hr />
      <div className="div-submit">
        <p className="info-login">
          signing up you agree to <br /> the terms of service.
        </p>
        <button type="submit" className="button-submit">
          <FiCornerDownRight size={20} color="#FFF" />
        </button>
      </div>
    </form>
  );
}
