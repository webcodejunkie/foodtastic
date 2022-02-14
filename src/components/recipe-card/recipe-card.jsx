import axios from "axios";
import { useState } from "react";
import Modal from 'react-modal';
import './recipe-card.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import MealInstructions from "./views/meal-instructions";
import MealProperties from "./views/meal-properties";

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
  const [recipeSummary, setRecipeSummary] = useState('');

  const getRecipe = async (id) => {
    const apiKey = '?apiKey=e6b5b55108764b5fa188b27d750e61ce'
    await axios.get(`https://api.spoonacular.com/recipes/${id}/information` + apiKey)
      .then((res) => {
        console.log(res.data);
        setRecipeInfo(res.data);
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
        <h1>{recipeInfo.title}</h1>
        <img className="modal-img" src={recipeInfo.image} alt="recipe" />
        <div className="recipe-source">
          <p>Recipe Source:</p>
          <a href={recipeInfo.sourceUrl}>{recipeInfo.sourceUrl}</a>
        </div>
        <div className="recipe-summary">
          <p>
            {recipeSummary}
          </p>
        </div>
        <MealProperties recipe={recipeInfo} />
        <MealInstructions recipe={recipeInfo} />
      </Modal>
    </div>
  );
}

export default RecipeCard;