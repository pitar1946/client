
const URL = 'https://www.food2fork.com/api/search?key=c55ed438a2d807597392d9731601b51c';

export const  fetchRecipes = () => dispatch =>  {
  fetch (URL)
      .then(res => res.json())
      .then (data => dispatch ({
          type: 'FETCH_RECIPES',
          payload: data
      }))
};
