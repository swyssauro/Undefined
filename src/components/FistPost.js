import api from "../services/axios";
import tmdb from '../services/Tmdb';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { FiCornerDownRight, FiUser } from 'react-icons/fi';

export default function Fistpost() {

    const Ctypo = localStorage.getItem('crypto');
    const { dados, setDados } = useState([]);
    const { register, setValue, handleSubmit } = useForm();

    useEffect(() => {
        tmdb.get('profile', {
        }).then(response => {
            setDados(response.data);
        })
    });

    const onSubmit = async (data) => {
        await api.post('anime/create', data, {
            headers: {
                Authorization: Ctypo,
            }
        }).then(response => {
            console.log(response.data);
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: 'fit-content', height: '100vh', padding: '5% 20%' }}>
            <h1 className="title-login">Login</h1>
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="title"
                name="title"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="sinopse"
                name="sinopse"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="duration"
                name="duration"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="rating"
                name="rating"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="data"
                name="data"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="poster"
                name="poster"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="backdrop"
                name="backdrop"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="follow"
                name="follow"
                className="input-login"
                type="text"
                ref={register({
                    required: (<p className="p-error-box">password is required</p>)
                })}
            />
            <hr />
            <div className="div-submit">
                <p className="info-login">signing up you agree to <br /> the terms of service.</p>
                <button type="submit" className="button-submit"><FiCornerDownRight size={20} color="#FFF" /></button>
            </div>
            <hr />
            <div className="div-submit">
                <button onClick={() => {
                    setValue('title', '4lanzinho')
                    setValue('sinopse', 'Agora, ela está na Escola de Magia Luna Nova, uma famosa escola de magia da Europa')
                    setValue('duration', '224m')
                    setValue('rating', '1')
                    setValue('data', '2011')
                    setValue('poster', '/wRQgNzqjajITlHTLkrDEuS5rhVX.jpg')
                    setValue('backdrop', '/wRQgNzqjajITlHTLkrDEuS5rhVX.jpg')
                    setValue('follow', true)
                }} className="button-submit"><FiUser size={20} color="#FFF" /></button>
            </div>
        </form>
    );
}