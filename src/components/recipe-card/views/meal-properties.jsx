import '../recipe-card.scss'

function MealProperties(props) {
  return (
    <div className='meal-properties-wrapper'>
      <div>
        <p className='meal-prop'>Vegitarian</p>
        {
          props.recipe.vegetarian ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        <p className='meal-prop'>Vegan</p>
        {
          props.recipe.vegan ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        <p className='meal-prop'>Gluten Free</p>
        {
          props.recipe.glutenFree ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        <p className='meal-prop'>Dairy Free</p>
        {
          props.recipe.dairyFree ? <p>Yes</p> : <p>No</p>
        }
      </div>
      <div>
        <p className='meal-prop'>Healthy</p>
        {
          props.recipe.vegetarian ? <p>Yes, it's healthy.</p> : <p>No, this isnt healthy.</p>
        }
      </div>
      <div>
        <p className='meal-prop'>Popularity</p>
        {
          props.recipe.veryPopular ? <p>People love this!</p> : <p>Least popular recipe</p>
        }
      </div>
    </div>
  );
}

export default MealProperties;