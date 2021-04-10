
async function callApi() {
    try {
        await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=all')
        .then(res => res.json())
        .then(data => displayFoodItem(data));
      } catch(err) {
        console.log(err) // Failed to fetch
      }
  }
callApi()

function displayFoodItem(foods) {

    const foodsContainer = document.getElementById("foodContainer");
    for (let i = 0; i < foods.meals.length; i++) {
        const food = foods.meals[i];
        const { strMeal, strMealThumb } = food;
        const foodCard = document.createElement('div');
        foodCard.className = "foodCard";
        const foodInfo = `
        <img src=${strMealThumb} alt=""/>    
        <h1>${strMeal}</h1>
        `;
        foodCard.innerHTML = foodInfo;
        foodsContainer.appendChild(foodCard)
    }
}
function searchFood() {
    const itemName = document.getElementById("search").value;


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals[0]));

    
}
function displaySearchResult(meal) {

    const { strMeal, strMealThumb } = meal;
    const foodCard = document.createElement('div');
    foodCard.className = "resultFood";
    const foodInfo = `
    <img src=${strMealThumb} alt=""/>    
    <h1>${strMeal}</h1>
    `;
    
    const foodsContainer = document.getElementById("container");
    foodCard.innerHTML = foodInfo;
    foodsContainer.innerHTML = "";
    foodsContainer.appendChild(foodCard);
    const recipe = document.createElement('div');
    
    for (var key in meal) {
        if (meal[key] !== null && meal[key] != "" && meal[key] != " " && meal[key] != null){
            foodShow = `
            <span class="ing" >Ingredients<span>
            <ul class="fa-ul" id="list_item">
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure1}  ${meal.strIngredient1}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure2}  ${meal.strIngredient2}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure3}  ${meal.strIngredient3}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure4}  ${meal.strIngredient4}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure5}  ${meal.strIngredient5}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure6}  ${meal.strIngredient6}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure7}  ${meal.strIngredient7}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure8}  ${meal.strIngredient8}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure9}  ${meal.strIngredient9}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure10}  ${meal.strIngredient10}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure11}  ${meal.strIngredient11}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure12}  ${meal.strIngredient12}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure13}  ${meal.strIngredient13}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure14}  ${meal.strIngredient14}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure15}  ${meal.strIngredient15}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure16}  ${meal.strIngredient16}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure17}  ${meal.strIngredient17}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure18}  ${meal.strIngredient18}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure19}  ${meal.strIngredient19}</li>
                <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${meal.strMeasure20}  ${meal.strIngredient20}</li>
            </ul>            
            `
        }
        


   
    
}
recipe.innerHTML = foodShow;
foodCard.appendChild(recipe);
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >0; i--) {
        if(this[i].innerText == "" || this[i].innerText == "null null"){
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
}
document.getElementsByClassName("list-item").remove();
}