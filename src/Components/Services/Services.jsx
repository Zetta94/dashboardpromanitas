import axios from 'axios';
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//ACTIONS REDUX
import { getService } from "../../Redux/Actions";

const Services = () => {

    //DISPATCH
    const dispatch = useDispatch();

    //REDUCER REDUX
    useEffect(() => {
      dispatch(getService());
    },[dispatch]);
  
    //REDUX STATES
    const allService = useSelector(state => state.services);

    return(
        <div>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allService?.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Services;