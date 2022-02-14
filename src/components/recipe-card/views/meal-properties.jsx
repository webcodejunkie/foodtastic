import '../recipe-card.scss'

function MealProperties(props) {
  return (
    <div className='meal-properties-wrapper'>
      <div>
        Vegitarian?
        {
          props.recipe.vegetarian ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        Vegan?
        {
          props.recipe.vegan ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        Gluten Free?
        {
          props.recipe.glutenFree ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        Dairy Free?
        {
          props.recipe.dairyFree ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        Healthy?
        {
          props.recipe.vegetarian ? <p>Yes, it's healthy.</p> : <p>No, this isnt healthy.</p>
        }
      </div>
      <div>
        Popular?
        {
          props.recipe.veryPopular ? <p>People love this!</p> : <p>Least popular recipe</p>
        }
      </div>
    </div>
  );
}

export default MealProperties;