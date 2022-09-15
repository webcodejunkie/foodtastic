import '../recipe-card.scss'

function MealCusines(props) {
  return (
    <div className='meal-cuisines'>
      <h1>Cuisines</h1>
      {
        props.recipe.cuisines.length === 0 ?
          <p>No associated cuisines.</p>
          :
          props.recipe.cuisines.map((item, i) => {
            return (
              <p key={i} >{item}</p>
            )
          })
      }
    </div>
  );
}

export default MealCusines;