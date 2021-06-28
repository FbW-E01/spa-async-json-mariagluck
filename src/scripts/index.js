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

//elements and class names have been added in each section, and style is done in CSS


//OTHER VERSION bellow:

// const cakes = document.querySelector("#cakes");
// const biscuits = document.querySelector("#biscuits");
// const bread = document.querySelector("#bread");

//  function populate(item, element) {
//      console.log(item);

//      const html = ` <div class="card m-3">
//         <img src="${item.image}" class="card-img-top">
//         <div class="card-body">
//           <h5 class="card-title">${item.title}</h5>
//           <p class="card-text">${item.author}<hr>Ingredients: ${item.ingredients.join(", ")}.</p>
//         </div>
//       </div>`;
//    const helper = document.createElement("div");
//    helper.innerHTML = html;
//    element.appendChild(helper.firstChild);
//  }

//  populate(recipes.cakes[0], cakes);
//  populate(recipes.biscuits[0], biscuits);
//  populate(recipes.bread[0], bread);

 //elements and class names have been added in each section, and style is done in CSS