import { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Styles from './Form.module.css';
import { Link } from 'react-router-dom';


const FormUsers = (props) => {

    const { id } = useParams();
    
    const [form, setForm] = useState({
        id: id,
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        cellnumber: '',
        address: '',
        password: ''
    });

    const handlerForm = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://promanitasapi.onrender.com/api/v1/users/${id}`, form)
        setForm({
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            cellnumber: '',
            address: '',
            password: ''
        })
        alert('Usuario Modificado');
    }
    
    return(
        <div className={Styles.formUsers}>
            <h1>Modificar Usuario</h1>
            <form onSubmit={(e)=> handlerSubmit}  >
                <label htmlFor="username">Usuario:</label>
                <input type="text" name= 'username' value = {form.username} onChange={(e)=> handlerForm(e)}/>
                <label htmlFor="firstname">Nombre:</label>
                <input type="text" name='firstname' value= {form.firstname}  onChange={(e)=> handlerForm(e)}/>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" name='lastname' value= {form.lastname} onChange={(e)=> handlerForm(e)}/>
                <label htmlFor="email">Email:</label>
                <input type="text" name= 'email' value= {form.email} onChange={(e)=> handlerForm(e)}/>
                <label htmlFor="">Contraseña:</label>
                <input type='text' name='password' value={form.password} onChange={(e)=> handlerForm(e)}></input>
                <label htmlFor="">Direccion:</label>
                <input type='text' name='address' value={form.address} onChange={(e)=> handlerForm(e)}></input>
                <label htmlFor="cellnumber">Número Telefónico:</label>               
                <input type='text' name='cellnumber' value={form.cellnumber} onChange={(e)=> handlerForm(e)}></input>          
                <button type="submit" onClick={e => handlerSubmit(e)} >Actualizar</button>
                <Link to='/users'><button>Volver</button></Link>
            </form>
        </div>
    );
};

export default FormUsers;