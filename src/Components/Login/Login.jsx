import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import axios from 'axios';

const Login=()=> {

  const navigate = useNavigate();

  //FORM STATE
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  //ON CHANGES FN
  const handlerForm = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    console.log(form)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/v1/login', form)
      .then(data => localStorage.setItem('token', data.data.token));

    if(form.email === 'Probando' && form.password === 'Probando'){
      navigate('/board');
    }else{
      alert('Error de autenticación');
    };
  };

//   // Save token to local storage
// ;

// // Retrieve token from local storage
// const token = localStorage.getItem('token');

// // Remove token from local storage
// localStorage.removeItem('token');




        

  return (

  <div className={style.loginDiv}>
    <div classNam={style.loginCard} >
      <h1 className={style.log}> Login </h1>

      <form onSubmit={e => handlerSubmit(e)}>

        <label htmlFor='email'>email
          <input name='email' type="text" id="email" value={form.email} onChange={e => handlerForm(e)} />
        </label>

        <label htmlFor='password'>Password
          <input name='password' type="password" id="password" value={form.password} onChange={e => handlerForm(e)} />
        </label>

      <button className={style.formGroup} type="submit" onClick={e => handlerSubmit(e)} >Login</button>

      </form>
    </div>
  </div>
  );
}

export default Login;
