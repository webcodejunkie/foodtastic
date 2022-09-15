import '../recipe-card.scss'

function MealQuickInfo(props) {
  return (
    <div className='meal-quick-info'>
      <p>Ready in {props.recipe.readyInMinutes} Mintues</p>
      <p>Servings: {props.recipe.servings} </p>
      <p>Spoonacular's Score: {props.recipe.spoonacularScore}</p>
      {
        props.recipe.cheap ?
          <p>Affordable Recipe</p>
          :
          <p>Exspensive Recipe</p>
      }
    </div>
  );
}

export default MealQuickInfo;