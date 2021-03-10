import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../Components/Store/Context';
import { useContext } from 'react/cjs/react.development';


import LogoHubbi from './logo.jpg';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const Main = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/People');
    }

    setError(error);
    setValues(initialState);
  }

  return(
    <div className="d-flex justify-content-center container">
      <div className="box"> 
        <div>
        <img
              src={LogoHubbi}
              className="responsive rounded-circle " 
              alt="LogiqueSistemas"
              height="170px"
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="user">Usuário</label>
            <input 
            id="user"
            type="text"
            name="user" 
            class="form-control" 
            placeholder="Seu Usuário"
            onChange={onChange}
            value={values.user}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input  
            id="password"
            type="password"
            name="password" 
            class="form-control"  
            placeholder="Senha"
            onChange={onChange}
            value={values.password}
            />
          </div>
          <button type="submit" className="btn btn-dark">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Main;