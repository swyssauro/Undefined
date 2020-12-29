import api from "../services/axios";

import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { FiCornerDownRight, FiUser } from 'react-icons/fi';

export default function FormRegister() {

    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await api.post('sing_up', data)
            .then(response => {
                const { data } = response;
                console.log(data);

                if (data) {
                    localStorage.setItem('crypto', data.crypto);
                    localStorage.setItem('username', data.username);
                    history.push('/');
                }
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: 'fit-content', height: '100vh', padding: '25%' }}>
            <h1 className="title-login">Register</h1>
            <hr />
            <input
                autoComplete="off"
                style={{ padding: '0 5%', border: '1px solid', borderRadius: '5px' }}
                placeholder="username"
                name="username"
                className="input-login"
                type="text"
                ref={register}
            />
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