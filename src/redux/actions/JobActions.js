import axios from 'axios';

export const getAllJobs=()=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        const response=await axios.get('https://futurecare.herokuapp.com/getUsers')
        

        dispatch({type:'GET_ALL_JOBS' , payload : response.data})

        dispatch({type:'LOADING',payload:false})
    } catch (error) {
        console.log(error);
        dispatch({type:'LOADING',payload:false})
    }
}