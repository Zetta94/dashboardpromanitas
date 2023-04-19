import React, { useState } from 'react';
import style from './Login.module.css';
import axios from 'axios';

const Login=()=> {

  //FORM STATE
  const [form, setForm] = useState({
    username: '',
    password: ''
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
      .then(data => console.log(data))
  }


        

  return (

  <div className={style.loginDiv}>
    <div classNam={style.loginCard} >
      <h1 className={style.log}> Login </h1>

      <form onSubmit={e => handlerSubmit(e)}>

        <label htmlFor='username'>Username
          <input name='username' type="text" id="username" value={form.username} onChange={e => handlerForm(e)} />
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
