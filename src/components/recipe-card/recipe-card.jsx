import axios from "axios";
import { useState } from "react";
import Modal from 'react-modal';
import './recipe-card.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import MealInstructions from "./views/meal-instructions";
import MealProperties from "./views/meal-properties";
import MealCusines from "./views/meal-cuisines";
import MealQuickInfo from "./views/meal-quick-info";

function RecipeCard(props) {

  const [modalIsOpen, setIsOpen] = useState(false);

  let windowOffset = 0;

  const openModal = () => {
    setIsOpen(true);
    windowOffset = window.scrollY;
  }

  const closeModal = () => {
    setIsOpen(false);
    document.body.setAttribute('style', '');
    window.scrollTo(0, windowOffset);
  }

  const [recipeInfo, setRecipeInfo] = useState({});
  const [recipeIngred, setIngred] = useState([]);
  const [recipeSummary, setRecipeSummary] = useState('');

  const apiKey = '?apiKey=e6b5b55108764b5fa188b27d750e61ce';

  const getIngred = async (id) => {
    await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json` + apiKey)
      .then((res) => {
        setIngred(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }

  const getRecipe = async (id) => {
    await axios.get(`https://api.spoonacular.com/recipes/${id}/information` + apiKey)
      .then((res) => {
        console.log(res.data);
        setRecipeInfo(res.data);
        getIngred(id);
        textFormat(res.data);
        document.body.setAttribute('style', `position: fixed; top: -${windowOffset}px' left: 0; right: 0;`)
        openModal();
      })
      .catch(error => console.log(error));
  }

  const textFormat = (summary) => {
    let text = summary.summary;
    let strippedText = text.replace(/<[^>]+>/g, '');
    setRecipeSummary(strippedText)
  }


  return (
    <div className="card-list">
      {
        props.recipes.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-head">
                <p className="card-text">
                  {item.title}
                </p>
              </div>
              <img className="card-img" src={item.image} alt="food" onClick={() => getRecipe(item.id)} />
            </div>
          )
        })
      }
      <Modal
        style={{ backgroundColor: "transparent" }}
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="button-wrapper">
          <FontAwesomeIcon className="close-button" onClick={closeModal} icon={solid("xmark")} />
        </div>
        <div className="recipe-title">
          <h1>{recipeInfo.title}</h1>
        </div>
        <div className="recipe-quick-info">
          <div className="modal-img-wrapper">
            <img className="modal-img" src={recipeInfo.image} alt="recipe" />
          </div>
          <div className="recipe-info-container">
            <MealQuickInfo recipe={recipeInfo} />
            <div>
              <h2>What You'll Need</h2>
              {
                recipeIngred.length === 0 ?
                  <p>I'm sorry, our database couldn't find any ingredients to this recipe</p>
                  :
                  recipeIngred.ingredients.map((item, i) => {
                    return (
                      <p key={i}>{item.name}</p>
                    )
                  })
              }
            </div>
          </div>
        </div>
        <div className="recipe-source">
          <p>Recipe Source:</p>
          <a href={recipeInfo.sourceUrl} target="_blank" rel="noreferrer">{recipeInfo.sourceUrl}</a>
        </div>
        <MealProperties recipe={recipeInfo} />
        <div className="cusine-wrapper">
          <MealCusines recipe={recipeInfo} />
        </div>
        <div className="recipe-summary">
          <h1>Recipe Summary</h1>
          <p>
            {recipeSummary}
          </p>
        </div>
        <MealInstructions recipe={recipeInfo} />
      </Modal>
    </div>
  );
}

export default RecipeCard;