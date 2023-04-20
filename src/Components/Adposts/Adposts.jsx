import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getAposts, getDeletedAdpost} from "../../Redux/Actions";

const Adpost = () => {
    //DISPATCH
    const dispatch = useDispatch();

    //REDUCER REDUX
    useEffect(() => {
      dispatch(getAposts());
      dispatch(getDeletedAdpost());
    },[dispatch]);

    //REDUX STATES
    const allAdposts = useSelector(state => state.adposts);
    const allDeletedAdposts = useSelector(state=> state.deletedAdposts);

    //DELETE ADPOST
    const deleteAdpost = async (id)=>{
        axios.delete(`https://promanitasapi.onrender.com/api/v1/adposts/${id}`)
            .then(() => {
                window.alert("Posteo eliminado con éxito");
                dispatch(getAposts());
                dispatch(getDeletedAdpost());
            })
            .catch((error) => {
                console.log(error);
            });
      };

      return (
        <div>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAdposts?.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button onClick={() => confirmDelete(item.id,'adpost')}>❎</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      );
};

export default Adpost;