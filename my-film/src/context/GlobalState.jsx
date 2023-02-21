
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext =createContext();

const initialState = {
    watchlist: [],
    watched: [],
};

export const GlobalProvider =(props) =>{
    const[state,dispatch] = useReducer(AppReducer,initialState);
    const addMovieToWatclist =(movie) =>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST",payload: movie})
    }
    return(
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            addMovieToWatclist,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}