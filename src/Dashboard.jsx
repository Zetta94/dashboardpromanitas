
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

  return (
    <div>

      <Navbar/>
      <div className="divbox">
        <Link to='/users' style={{ textDecoration: 'none' }}><h1 className="h1box">Usuarios activos: {allUsers.length}</h1></Link>
        <h1 className="h1box" >Usuarios eliminados: {allDeletedUsers.length}</h1>
        <Link to='/adposts' style={{ textDecoration: 'none' }}><h1 className="h1box">Posteos activos: {allAdposts.length}</h1></Link>
        <h1 className="h1box">Posteos eliminados: {allDeletedAdposts.length}</h1>
        <Link to='/contracts' style={{ textDecoration: 'none' }}><h1 className="h1box">Contratos activos: {allContracts.length}</h1></Link>
        <h1 className="h1box">Contratos eliminados: {allDeletedContracts.length}</h1>
      </div>

    </div>
  );
};

export default Dashboard;
