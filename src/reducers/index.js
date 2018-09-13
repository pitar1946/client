import { combineReducers } from 'redux';
import fetchRecipes from './fetchRecipes';

export default combineReducers({
  recipes: fetchRecipes
});
