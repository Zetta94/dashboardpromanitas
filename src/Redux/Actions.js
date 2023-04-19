import axios from 'axios';

//USERS  <----------------------------------------------------->
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

export const getDeletedUsers = () => async (dispatch) => {
    dispatch({
        type: 'GET_DELETED_USERS', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/users/deleted")
    .then(response => {
        dispatch({
            type: 'GET_DELETED_USERS', 
            payload: response.data.data
        });
    });
};

//ADPOSTS  <----------------------------------------------------->
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

export const getDeletedAdpost = () => async (dispatch) =>{
    dispatch({
        type: 'GET_DELETED_ADPOST',
        payload: []
    });

    await axios.get('https://promanitasapi.onrender.com/api/v1/adposts/deleted')
    .then(response =>
        dispatch({
            type: 'GET_DELETED_ADPOST',
            payload: response.data.data
        }))
}

//Services   <----------------------------------------------------->
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

export const getDeletedService = () => async (dispatch) => {
    dispatch({
        type: 'GET_DELETED_SERVICE', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/services/deleted")
    .then(response => {
        dispatch({
            type: 'GET_DELETED_SERVICE', 
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

//Contract   <----------------------------------------------------->
export const getContract = () => async (dispatch) => {
    dispatch({
        type: 'GET_CONTRACT', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/contract")
    .then(response => {
        dispatch({
            type: 'GET_CONTRACT', 
            payload: response.data.data
        });
    });
};

export const getDeletedContract = () => async (dispatch) => {
    dispatch({
        type: 'GET_DELETED_CONTRACT', 
        payload : []
    });
    await axios.get("https://promanitasapi.onrender.com/api/v1/contract/deleted")
    .then(response => {
        dispatch({
            type: 'GET_DELETED_CONTRACT', 
            payload: response.data.data
        });
    });
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
