import React,{Component} from 'react';

class Recipe extends Component{

 render(){
  const recipe = this.props.location.state;
  const bgimage = recipe.image_url;
   return(
     <div className='container mt-4'>
     <div className="row">
       <div className="col-lg-3 col-sm-6 col-md-4 profile rounded " style={{ backgroundImage: `url(${bgimage})`,
                                                                        backgroundRepeat  : 'center  no-repeat',
                                                                        backgroundSize: 'cover'}}>
       </div>
      </div>
      <div className="row">
       <div className="col-lg-3 col-sm-6 col-md-4 profile rounded ">
        <div className=" ml-4">
         <h1 className="mb-5">{recipe.title}</h1>
          <h3 className="lead">Publisher: {recipe.publisher}</h3>
          <hr className="my-4"/>
          <p>Url: <a href={recipe.publisher_url} target='_blank'>{recipe.publisher_url}</a></p>
          <hr className="my-4"/>
          <p>Rank: {recipe.social_rank}</p>
        </div>
      </div>
      </div>
      <div className="bg-dark text-warning p-4 text-center footer">
      Copyright &copy; 2018 Codepool
    </div>
    </div>
    )
  }
}
export default Recipe;
