import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getContract, getDeletedContract} from "../../Redux/Actions";
import Navbar from "../Navbar/Navbar";


const Contracts = () => {

    //DISPATCH
    const dispatch = useDispatch();
    
    //REDUCER REDUX
    useEffect(() => {
        dispatch(getContract());
        dispatch(getDeletedContract());
    },[dispatch]);

    //REDUX STATES
    const allContracts = useSelector(state => state.contracts);
    // const allDeletedContracts = useSelector(state=> state.deletedContracts);

    //DELETE CONTRACT
    const deleteContract = async (id)=>{
        axios.delete(`https://promanitasapi.onrender.com/api/v1/contract/${id}`)
            .then(() => {
                window.alert("Contrato eliminado con éxito");
                dispatch(getContract());
                dispatch(getDeletedContract());
            })
            .catch((error) => {
                console.log(error);
            });
    };



    // const confirmDelete = (id,selector) => {
    //     const confirmMessage = "¿Realmente deseas eliminar?";
    //     const confirmed = window.confirm(confirmMessage);
    //     if (confirmed && selector === 'contract') {
    //       deleteContract(id);
    //     }
    //   };    
    
    return (
        <div>
            <Navbar/>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha de cierre</th>
                        <th>Precio</th>
                        <th>Detalles</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allContracts?.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.commencementDate}</td>
                                <td>{item.terminationDate}</td>
                                <td>{item.payment} USD</td>
                                <td>{item.detail}</td>
                                <td>
                                {/* <button onClick={() => confirmDelete(item.id,'contract')}>❎</button> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contracts;