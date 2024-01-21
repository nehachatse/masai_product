import { act } from "react-dom/test-utils";

export const initState = {
    loading: false,
    err: false,
    res: {},
  };
  
  // The above is the initial state of the reducer. Don't rename/edit it
  
  export const productsReducer = (state, action) => {
    switch(action.type){
      case  "LOADING":
        console.log("ANY LOADING", action, state)
        return {...state, loading: action.loading}
      
        case "SUCCESS":
          console.log("ANY SUCCESS", action, state)
          return {...state, res: action.res}
      
        case "ERROR":
          console.log("ANY ERROR", action, state)
          return {...state, error: action.error}
      
        default:
        throw Error("invalid action type")
      }
  };
  