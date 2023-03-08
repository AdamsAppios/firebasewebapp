// reducer.js
export const initialState = {
    dateRef:"",
    dealer: 0,
    pickup: 0,
    square: 0,
    small:0,
    tenliters:0,
    noseal:0,
    container:0,
    capsealBeg:0,
    capsealEnd:0,
    expenses:"",
    duty:"",
    outputText:"",
};
    
const refillingReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATE":
            return {
            ...state,
            dateRef: action.payload || '', // parse to int, set to 0 if NaN
            };
        case "SET_DEALER":
            return {
            ...state,
            dealer: parseInt(action.payload) || 0, // parse to int, set to 0 if NaN
            };
        case "SET_PICKUP":
            return {
                ...state,
                pickup: parseInt(action.payload) || 0,
            };
        case "SET_SQUARE":
            return {
            ...state,
            square: parseInt(action.payload) || 0,
            };
        case "SET_SMALL":
            return {
            ...state,
            square: parseInt(action.payload) || 0,
            };  
        case "SET_TENLITERS":
            return {
            ...state,
            square: parseInt(action.payload) || 0,
            };
        case "SET_NOSEAL":
            return {
            ...state,
            square: parseInt(action.payload) || 0,
            };            
        case "SET_CONTAINER":
            return {
            ...state,
            container: parseInt(action.payload) || 0,
            };
        case "SET_CAPSBEG":
            return {
            ...state,
            capsealBeg: parseInt(action.payload) || 0,
            };
        case "SET_CAPSEND":
            return {
            ...state,
            capsealEnd: parseInt(action.payload) || 0,
            };
        case "SET_EXPENSES":
            return {
            ...state,
            expenses: action.payload || '',
            };
        case "SET_DUTY":
            return {
            ...state,
            duty: action.payload || '',
            };
        case "SET_OUTPUTTEXT":
            return {
            ...state,
            outputText: action.payload || '',
            };

        default:
        return state;
    }
};

export default refillingReducer;