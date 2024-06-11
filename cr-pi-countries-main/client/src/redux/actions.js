import axios from 'axios';

import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_BY_ID_ACTIVITY,
    GET_BY_NAME,
    GET_BY_ID,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION,
    DELETE_ACTIVITY,
    PUT_ACTIVITY

    
       
} from '../redux/action-types';

export const getCountries = () => {
    const endpoint = 'http://localhost:3001/countries';
    return async (dispatch) => {
       const {data} = await axios.get(endpoint);
          return dispatch({
             type: GET_COUNTRIES,
             payload: data,
          });
        };
    };

export const getActivities = () => {
    const endpoint = 'http://localhost:3001/activities';
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
            return dispatch({
                 type: GET_ACTIVITIES,
                 payload: data,
              });
            };
        };
        
        
export const getByIdActivity = (id) => {
    const endpoint = `http://localhost:3001/activities/${id}`;
    return async (dispatch) => {
        try{ 
            const {data} = await axios.get(endpoint);
            console.log( 'ESTA ES LA DATA', data);
            return dispatch({
                    type: GET_BY_ID_ACTIVITY,
                     payload: data,
            });
        } catch (error) {
             console.log(error);
        }
    };
};         

export const getByName = (name) => {
    const endpoint = `http://localhost:3001/countries/name?name=${name}`;
    return async (dispatch) => {
        try {
        const {data} = await axios.get(endpoint);
            return dispatch({
                 type: GET_BY_NAME,
                 payload: data,
            });
         } catch (error){
            console.log(error)
         } 
        };
    };

export const getById = (id) => {
    const endpoint = `http://localhost:3001/countries/${id}`;
    return async (dispatch) => {
        try{ 
        const {data} = await axios.get(endpoint);
        console.log(data);
            return dispatch({
                 type: GET_BY_ID,
                 payload: data,
            });
        } catch (error) {
            console.log(error);
        }
        };
    }; 

export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    };
};    

export const filterByActivity = (payload) => {
    
    return {
        type: FILTER_BY_ACTIVITY,
        payload,
    };
};

export const orderByAlphabet = (payload) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload,
    };

};

export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload,
    };

};



export const postActivity = (payload) => {
    return async function (dispatch) {
        try {
            console.log('Payload enviado en la solicitud:', payload); // Mostrar el payload antes de enviar la solicitud
            const data = await axios.post('http://localhost:3001/activities', payload);
            console.log(data);
            // Obtener la lista actualizada de países y actividades después de agregar una nueva actividad
            dispatch(getCountries());
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}
/* 
 export const deleteActivity = (id) => {
    console.log(id)
    const endpoint = `http://localhost:3001/activities/${id}`;
    return async (dispatch) => {
        try {
        const {data} = await axios.delete(endpoint);
        console.log(endpoint)
            return dispatch({
                 type: DELETE_ACTIVITY,
                 payload: data,
            });
         } catch (error){
            console.log(error)
         } 
        };
        
    }; */
 
    export const putActivity = (id, newData) => {
        const endpoint = `http://localhost:3001/activities/${id}`;
        return async (dispatch) => {
            try {
            const {data} = await axios.put(endpoint, newData);
                return dispatch({
                     type: PUT_ACTIVITY,
                     payload: data,
                });
             } catch (error){
                console.log(error)
             } 
            };
    
        };