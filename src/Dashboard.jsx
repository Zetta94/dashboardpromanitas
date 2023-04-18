import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getUsers, 
        getAposts, 
        getService, 
        getContract, 
        getDeletedAdpost, 
        getDeletedUsers, 
        getDeletedContract} 
from "./Redux/Actions";
//CSS
import  "./Assets/CSS/Dashboard.css"
//Components
import Navbar from "./Components/Navbar/Navbar.jsx"


const Dashboard=()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAposts());
    dispatch(getService());
    dispatch(getContract());
    dispatch(getDeletedAdpost());
    dispatch(getDeletedUsers());
    dispatch(getDeletedContract());

  },[dispatch]);

  const allUsers = useSelector(state => state.users);
  const allDeletedUsers = useSelector(state=> state.deletedUsers);
  const allAdposts = useSelector(state => state.adposts);
  const allDeletedAdposts = useSelector(state=> state.deletedAdposts);
  const allService = useSelector(state => state.services);
  const allContracts = useSelector(state => state.contracts);
  const allDeletedContracts = useSelector(state=> state.deletedContracts);
  
  
  const [infServer,setInfServer]=useState([])

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, /* setElementsPerPage */] = useState(8);

  //COUNTER ELEMENTS
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  
  //PAGINATION BUTTON NEXT
  const paginationBtnNext = (e) => {
      e.preventDefault();
      setCurrentPage(currentPage + 1);
  };

  //PAGINATION BUTTON PREVIOUS
  const paginationBtnPrev = (e) => {
      e.preventDefault();
      setCurrentPage(currentPage - 1);
  };

  const setStates = (e, selector) => {
    e.preventDefault()
    setInfServer(selector.slice(indexOfFirstElement, indexOfLastElement))
  };

  const deleteUser = async (id)=>{
    axios.delete(`https://promanitasapi.onrender.com/api/v1/users/${id}`)
    .then(() => {
      window.alert("Usuario eliminado con éxito");
      // Después de eliminar el usuario, actualiza los datos de la tabla
      dispatch(getUsers());
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  //DELETE USERS -------------------------------

  const confirmDelete = (id) => {
    const confirmMessage = "¿Realmente deseas eliminar?";
    const confirmed = window.confirm(confirmMessage);
    if (confirmed) {
      deleteUser(id);
    }
  };

  return (
    <div>
      <Navbar/>
      <button className="dashboard-btn" onClick={ e => setStates(e, allUsers)} >USUARIOS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allAdposts)} >ADPOSTS</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allService)} >SERVICES</button>
      <button className="dashboard-btn" onClick={ e => setStates(e, allContracts)} >CONTRACTS</button>
       
      <div className='dashboard-info'>
        <h1>Usuarios: {allUsers.length}</h1>
        <h1>Usuarios eliminados: {allDeletedUsers.length}</h1>
        <h1>Posteos: {allAdposts.length}</h1>
        <h1>Posteos eliminados: {allDeletedAdposts.length}</h1>
        <h1>Contratos:{allContracts.length}</h1>
        <h1>Contratos eliminados: {allDeletedContracts.length}</h1>
      </div>

      {infServer.length > 0 && (
      <table className="dashboard-table">
        <thead>
          <tr>
            {infServer[0]?.name ? (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Info</th>
              </>
            ) : (
              <>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>Contraseña</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {infServer.map((item) =>
            item.name ? (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description || item.image}</td>
                <td>
                  <button onClick={() => confirmDelete(item.id)}>X</button>
                </td>
              </tr>
            ) : (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.cellnumber}</td>
                <td>{item.address}</td>
                <td>{item.password}</td>
                <td>{item.deleted}</td>
                <td>
                  <button onClick={() => confirmDelete(item.id)}>X</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      )}

            {/* -------------PAGINATION---------------- */}
      <div>
          {
              currentPage === 1 ? ( <span></span> ) : ( <button  onClick={e => paginationBtnPrev(e)} >PREV</button> )
          }
          <span>{currentPage}</span>
          {
              Math.ceil(allUsers.length /elementsPerPage) > currentPage ? ( <button  onClick={e => paginationBtnNext(e)} >NEXT</button> ) : ( <span></span> )
          }
      </div>



    </div>
  );
}

export default Dashboard;
