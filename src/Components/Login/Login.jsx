import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import axios from 'axios';

const Login=()=> {

  const navigate = useNavigate();

  //FORM STATE
  const [form, setForm] = useState({
    admin: "",
    password: ""
  });

  //ON CHANGES FN
  const handlerForm = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/v1/login', form)
      .then(data => localStorage.setItem('token', data.data.token));

    if((form.admin === 'Manuel Zuñiga' && form.password === 'admin') ||( form.admin === 'Mariana Flores' && form.password === 'admin') || (form.admin === 'Kevin Alfonzo' && form.password === 'admin') || (form.admin === 'Julian Riera' && form.password === 'admin') || (form.admin === 'Gabriela Acevedo' && form.password === 'admin') || (form.admin === 'Yanina Zurcher' && form.password === 'admin') || (form.admin === 'Lucio' && form.password === 'admin') || (form.admin === 'Maria Lobeto' && form.password === 'admin')){
      navigate('/board');
    }else{
      alert('Error de autenticación');
    };
  };;

  return (

  <div className={style.loginDiv}>
    <div classNam={style.loginCard} >
      <h1 className={style.log}> Login </h1>

      <form onSubmit={e => handlerSubmit(e)}>

        <label htmlFor='admin'>Administrador
          <input name='admin' type="text" id="admin" value={form.admin} onChange={e => handlerForm(e)} />
        </label>

        <label htmlFor='password'>Pass
          <input name='password' type="password" id="password" value={form.password} onChange={e => handlerForm(e)} />
        </label>

      <button className={style.formGroup} type="submit" onClick={e => handlerSubmit(e)} >Login</button>

      </form>
    </div>
  </div>
  );
};

export default Login;
