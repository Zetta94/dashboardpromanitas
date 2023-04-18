const initialState = { 
    users : [],
    allUsers: [],
    adposts : [],
    services: [],
    contracts: [],
    deletedUsers: [],
    deletedAdposts: [],
    deletedContracts: []
};

function rootReducer(state = initialState, action){
    switch(action.type) {

        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                allUsers: action.payload 
            };

        case 'GET_USER_NAME':
            return {
                ...state,
                users: action.payload
            }

        case 'GET_ADPOSTS':
            return {
                ...state,
                adposts : action.payload
            };

        case 'GET_SERVICE':
            return {
                ...state,
                services: action.payload
            };

        case 'GET_DELETED_USERS':
            return{
                ...state,
                deletedUsers: action.payload
            }

        case 'GET_DELETED_ADPOSTS':
            return {
                ...state,
                deletedAdpost: action.payload
            }

        case 'GET_CONTRACT':
            return {
                ...state,
                contracts: action.payload
            }

        case 'GET_DELETED_CONTRACT':
            return {
                ...state,
                deletedContracts: action.payload
            }

        case 'ORDER_ASC':
            const orderUsers = state.allUsers.sort((a,b)=>a.name.localeCompare(b.name))
            const orderAdposts = state.adposts.sort((a,b)=>a.name.localeCompare(b.name))
             return{
                ...state,
                users : orderUsers,
                adposts : orderAdposts
             };

        case 'ORDER_DES':
            const orderUsers2 = state.allUsers.sort((a, b) => b.name.localeCompare(a.name))
            const orderAdposts2 = state.adposts.sort((a, b) => b.name.localeCompare(a.name))
            return{
            ...state,
            users : orderUsers2,
            adposts : orderAdposts2
            };
        
        default:
            return state;
    };
    

};


export default rootReducer;