import api from "../services/axios";

import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { FiCornerDownRight, FiUser } from 'react-icons/fi';

export default function FormLogin() {

    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await api.post('auth', data)
            .then(response => {
                const { data } = response;
                console.log(data);

                if (data) {
                    localStorage.setItem('crypto', data.crypto);
                    localStorage.setItem('username', data.username);
                    history.push(`/user/${data.username}`);
                }
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: 'fit-content', height: '100vh', padding: '25%' }}>
            <h1 className="title-login">Login</h1>
            <p className="input-text">username</p>
            <hr />
            <div className="input-icon">
                <div type="email" className="box-icon">
                    <FiUser className="icon-style-input" />
                </div>
                <input
                    autoComplete="off"
                    placeholder="email"
                    style={{ width: '328.98px' }}
                    name="email"
                    className="input-login"
                    type="email"
                    ref={register}
                />
            </div>
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="password"
                name="password"
                className="input-login"
                type="password"
                ref={register}
            />
            <hr />
            <div className="div-submit">
                <p className="info-login">signing up you agree to <br /> the terms of service.</p>
                <button type="submit" className="button-submit"><FiCornerDownRight size={20} color="#FFF" /></button>
            </div>
        </form>
    );
}