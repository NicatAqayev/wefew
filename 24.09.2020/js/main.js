let mySearch = document.querySelector("#meals_app .input-group .input-group-append span");
mySearch.addEventListener("click",async function(){

        let myInput = document.querySelector("input[name='meal']");
        let url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${myInput.value}`;
        let response = await fetch(url);
        let meal = await response.json();
    
        console.log(meal.meals[0]);

    let myDiv = document.createElement("div");
    myDiv.classList.add("col-md-4");
    myDiv.innerHTML =
    ` 
    <p>${meal.meals[0].strMeal}</p>
    <p>${meal.meals[0].strArea}</p>
    <a href="${meal.meals[0].strYoutube}">${meal.meals[0].strMeal} youtube-link</a>
    <img src="${meal.meals[0].strMealThumb}"></img>
    `
let mymealsec = document.querySelector("#meals_app .myprop");
  mymealsec.append(myDiv);

});

