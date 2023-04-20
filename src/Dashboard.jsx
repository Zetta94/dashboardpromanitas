
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//ACTIONS REDUX
import { getUsers, 
        getAposts, 
        getContract, 
        getDeletedAdpost, 
        getDeletedUsers, 
        getDeletedContract} 
from "./Redux/Actions";
//CSS
import  "./Assets/CSS/Dashboard.css";
//Components
import Navbar from "./Components/Navbar/Navbar.jsx";
import Users from './Components/Users/Users';
import { Link } from "react-router-dom";


const Dashboard=()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAposts());
    dispatch(getContract());
    dispatch(getDeletedAdpost());
    dispatch(getDeletedUsers());
    dispatch(getDeletedContract());
  },[dispatch]);

  const allUsers = useSelector(state => state.users);
  const allDeletedUsers = useSelector(state=> state.deletedUsers);
  const allAdposts = useSelector(state => state.adposts);
  const allDeletedAdposts = useSelector(state=> state.deletedAdposts);
  const allContracts = useSelector(state => state.contracts);
  const allDeletedContracts = useSelector(state=> state.deletedContracts);

  // const deleteUser = async (id)=>{
  //   axios.delete(`https://promanitasapi.onrender.com/api/v1/users/${id}`)
  //   .then(() => {
  //     window.alert("Usuario eliminado con éxito");
  //     dispatch(getUsers());
  //     dispatch(getDeletedUsers());
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };
  
  // const deleteAdpost = async (id)=>{
  //   axios.delete(`https://promanitasapi.onrender.com/api/v1/adposts/${id}`)
  //   .then(() => {
  //     window.alert("Posteo eliminado con éxito");
  //     dispatch(getAposts());
  //     dispatch(getDeletedAdpost());
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };

  // const deleteContract = async (id)=>{
  //   axios.delete(`https://promanitasapi.onrender.com/api/v1/contract/${id}`)
  //   .then(() => {
  //     window.alert("Contrato eliminado con éxito");
  //     dispatch(getContract());
  //     dispatch(getDeletedContract());
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };

  // const confirmDelete = (id,selector) => {
  //   const confirmMessage = "¿Realmente deseas eliminar?";
  //   const confirmed = window.confirm(confirmMessage);
  //   if (confirmed && selector === 'user') {
  //     deleteUser(id);
  //   }
  //   if (confirmed && selector === 'adpost') {
  //     deleteAdpost(id);
  //   }
  //   if (confirmed && selector === 'contract') {
  //     deleteContract(id);
  //   }
  // };

  return (
    <div>
      <Navbar/>
      <div className="divbox">
        <Link to='/users'><h1 className="h1box">Usuarios activos: {allUsers.length}</h1></Link>
        <h1 className="h1box">Usuarios eliminados: {allDeletedUsers.length}</h1>
        <Link to='/adposts'><h1 className="h1box">Posteos activos: {allAdposts.length}</h1></Link>
        <h1 className="h1box">Posteos eliminados: {allDeletedAdposts.length}</h1>
        <Link to='/contracts'><h1 className="h1box">Contratos activos: {allContracts.length}</h1></Link>
        <h1 className="h1box">Contratos eliminados: {allDeletedContracts.length}</h1>
      </div>
      

      <Users />
      {/* <Adpost/> */}
      {/* <Contracts /> */}
      {/* <Services /> */}

    </div>
  );
};

export default Dashboard;
