import '../recipe-card.scss'

function MealInstructions(props) {
  return (
    <div className='meal-instructions'>
      <h2>How to make</h2>
      {
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