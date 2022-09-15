import '../recipe-card.scss'

function MealInstructions(props) {
  return (
    <div className='meal-instructions'>
      <h1>How to make</h1>
      {
        props.recipe.analyzedInstructions.length === 0 ?
          <p>Sorry, this recipe doesn't contain any steps in our database, use the source link to find the recipe.</p>
          :
          props.recipe.analyzedInstructions.map((item, i) => {
            return (
              <div key={i}>
                {
                  item.steps.map((step, i) => {
                    return (
                      <div key={i}>
                        <p>Part: {step.number}</p>
                        <p>{step.step}</p>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
      }
    </div>
  );
}

export default MealInstructions;