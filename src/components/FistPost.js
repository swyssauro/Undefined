import api from "../services/axios";
import tmdb from "../services/Tmdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FiCornerDownRight } from "react-icons/fi";

export default function Fistpost() {
  const Ctypo = localStorage.getItem("crypto");
  const { register, setValue, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  const params = useParams();

  useEffect(() => {
    tmdb
      .get(`movie/${params.tmdb}?api_key=9b8159d0b078922af8c4e8daecbae9f0`, {})
      .then((response) => {
        setData(response.data);
      });
  }, [params.tmdb]);

  const onSubmit = async (data) => {
    await api.post("anime/create", data, {
      headers: {
        Authorization: Ctypo,
      },
    });
  };

  return (
    <>
      <div className="div-submit">
        <button
          onClick={() => {
            setValue("follow", 1);
          }}
          className="button-submit"
        >
          SIM
        </button>

        <button
          onClick={() => {
            setValue("follow", 0);
          }}
          className="button-submit"
        >
          NÃO
        </button>
        <hr />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "fit-content", height: "100vh", padding: "5% 20%" }}
      >
        <h1 className="title-login">Login</h1>
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="title"
          name="title"
          value={data.title}
          className="input-login"
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="sinopse"
          name="sinopse"
          value={data.overview}
          className="input-login"
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="duration"
          name="duration"
          value={data.runtime}
          className="input-login"
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="rating"
          name="rating"
          value={data.vote_average}
          className="input-login"
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="data"
          name="data"
          value={data.release_date}
          className="input-login"
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="poster"
          name="poster"
          value={data.poster_path}
          className="input-login"
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="backdrop"
          name="backdrop"
          className="input-login"
          value={data.backdrop_path}
          type="text"
          ref={register({
            required: <p className="p-error-box">password is required</p>,
          })}
        />
        <hr />
        <input
          autoComplete="off"
          style={{ padding: "0 5%", border: "1px solid", borderRadius: "5px" }}
          placeholder="follow"
          name="follow"
          className="input-login"
          type="text"
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
    </>
  );
}
