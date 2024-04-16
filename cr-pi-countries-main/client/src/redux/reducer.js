import { GET_COUNTRIES, GET_ACTIVITIES, GET_BY_NAME, GET_BY_ID, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_ALPHABET, ORDER_BY_POPULATION, POST_ACTIVITY } from "./action-types";


const initialState = {
    allCountries: [],
    countriesCopy: [],
    allActivities: [],
    country:[]
   
}


const reducer = (state = initialState, { type, payload}) => {
    switch(type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries:payload,
                countriesCopy:payload,
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                allActivities:payload,
            }
            
        case GET_BY_NAME:
            return{
                ...state,
                allCountries:payload,
            }      
        case GET_BY_ID:   
            return{
                ...state,
                country:payload
            }
            case FILTER_BY_ACTIVITY:
                const countriesActivity = state.countriesCopy

               
                const filterActivities = countriesActivity.filter(country => {
                    if (country.Activities && country.Activities.length > 0) {
                        return country.Activities.some(activityItem => activityItem.name === payload);
                    }
                    return false; 
                });
            
                return {
                    ...state,
                    allCountries: filterActivities,
                }
            
        case FILTER_BY_CONTINENT:
            const countries = state.countriesCopy;
            const continentFilter = countries.filter(el => el.continent === payload)
            return{
                ...state,
                allCountries:continentFilter,
            }
         
         case ORDER_BY_ALPHABET:
            const sortCountries = [...state.allCountries]; 
            sortCountries.sort((a, b) => {
                if (payload === 'ascendente') {
                    return a.name.localeCompare(b.name); 
                } else {
                    return b.name.localeCompare(a.name); 
                }
            });
            return {
                ...state,
                allCountries: sortCountries
            };
         case ORDER_BY_POPULATION:
                const sortByPopulation = [...state.allCountries]; 
                sortByPopulation.sort((a, b) => {
                    const populationA = a.population;
                    const populationB = b.population;
                    if (payload === 'menor') {
                        return populationA - populationB;
                    } else {
                        return populationB - populationA;
                    }
                });
                return {
                    ...state,
                    allCountries: sortByPopulation
                };
            case  POST_ACTIVITY:
                return {
                    ...state,
                }   
                 
       default:
        return {...state}
    }
};


export default reducer;