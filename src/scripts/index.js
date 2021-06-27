// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import {
    recipesJSON
} from './data.js';

// \/ All of your javascript should go here \/


const recipes = JSON.parse(recipesJSON);

for (const section in recipes) {
    recipes[section].forEach(e => {
        document.getElementById(`${section}`).innerHTML += 
        `<div class="card m-3">
          <img src="${e.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.author}<hr>Ingredients: ${e.ingredients.join(" ")}.</p>
          </div>
        </div>`

    });
}
//once elements and class names added in each section, style is done in CSS