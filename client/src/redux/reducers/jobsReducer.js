const intialState = {

    jobs : []
}

export const jobsReducer=(state=initalState, action)=>{

    switch (action.type)
    {
        case 'GET_ALL_JOBS' : return{
            ...state,
            jobs : action.payload
        }
        default : return state
    }
}