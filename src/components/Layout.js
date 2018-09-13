import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchRecipes } from '../actions';

import '../css/index.css';

class Layout extends Component{
constructor(){
  super();
  this.state = {
    publisher: ''
  }
}

componentDidMount(){
  this.props.fetchRecipes();
}

searchRecipe = (e) => {
  this.setState({
    publisher: e.target.value
  })
}

 render(){
   const recipes = this.props.recipes.recipes;
   return(
      <div>
      <div className="container items mb-4">
        <h1 className="display-4 text-center mt-4 mb-4">Recipes</h1>
        <div>
          <input
            onChange={this.searchRecipe}
            value={this.state.publisher}
            className="form-control form-control-lg mb-5"
            placeholder="Search ..."
          />
        </div>
        <div className="row mb-4">
          {recipes ? recipes.filter(recipe => {
            return recipe.publisher.toLowerCase().includes(this.state.publisher)
            }).map(recipe => {
                       return  <div className="col-lg-3 col-sm-6 portfolio-item mb-2" key={recipe.recipe_id}>
                        <div>
                         <Link to={{pathname:`/recipe/${recipe.recipe_id}`, state: {...recipe}}}>
                          <div className="card h-100 ">
                             <img className="card-img-top  img img-responsive" src={recipe.image_url} alt=""/>
                             <p className="card-text p-1 text-center">{recipe.publisher}</p>
                           <div className="card-footer  bg-warning">
                          </div>
                         </div>
                       </Link>
                      </div>
                    </div>
                }) : null}
          </div>
      <div className="bg-dark text-warning p-4 text-center footer">
        Copyright &copy; 2018 Codepool
      </div>
     </div>
     </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
}
export default connect(mapStateToProps, {fetchRecipes})(Layout);
