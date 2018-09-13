
const initialState = {
  recipes: []
}

export default function (state=initialState,action){
    switch(action.type){
        case 'FETCH_RECIPES':
            return {...state, recipes: action.payload}
        default:
            return state;
    }
}
