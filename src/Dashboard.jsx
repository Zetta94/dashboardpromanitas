//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getUsers, getAposts, getService } from "./Redux/Actions";

const Dashboard=()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAposts());
    dispatch(getService());
  },[dispatch]);

  const allUsers = useSelector(state => state.users);
  const allAdposts = useSelector(state => state.adposts);
  const allService = useSelector(state => state.services);

  const [infServer,setInfServer]=useState([])

  const setStates = (e, selector) => {
    e.preventDefault()
    setInfServer(selector)
  }
  
  return (
    <div>
      <button onClick={ e => setStates(e, allUsers)} >USUARIOS</button>
      <button onClick={ e => setStates(e, allAdposts)} >ADPOSTS</button>
      <button onClick={ e => setStates(e, allService)} >SERVICES</button>
    {infServer.map(item  =>  item.name ? (
            <table key={item.id}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description || item.image}</td>
            </tr>
            </tbody>
            </table>
            ) : ( 

              <table key={item.id}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>Contraseña</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.cellnumber}</td>
              <td>{item.address}</td>
              <td>{item.password}</td>
              <td>{item.deleted}</td>
              </tr>
            </tbody>
            </table>)
          )
          }

    </div>
  );
}

export default Dashboard;
