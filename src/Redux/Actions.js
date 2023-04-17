import axios from 'axios';

export const getUsers = () => async (dispatch) => {
    dispatch({
        type: 'GET_USERS', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/users")
    .then(response => {
        dispatch({
            type: 'GET_USERS', 
            payload: response.data.data
        });
    });
};

export const getAposts = () => async (dispatch) => {
    dispatch({
        type: 'GET_ADPOSTS', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/adposts")
    .then(response => {
        dispatch({
            type: 'GET_ADPOSTS', 
            payload: response.data.data
        });
    });
};

export const getService = () => async (dispatch) => {
    dispatch({
        type: 'GET_SERVICE', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/services")
    .then(response => {
        dispatch({
            type: 'GET_SERVICE', 
            payload: response.data.data
        });
    });
};


export const getUsername = (name) => async (dispatch) => {
        dispatch({
            type: 'GET_USERNAME',
            payload: []
        });

        await axios.get('https://promanitasapi.onrender.com/api/v1/users' + name)
        .then(response => 
            dispatch({
                type: 'GET_USERNAME',
                payload: response.data.data
            }));        
};


export const OrderAsc = () =>{
    return {
        type: "ORDER_ASC"
    }
};

export const OrderDes = () =>{
    return {
        type: "ORDER_DES"
    }
};
