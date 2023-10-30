// Globales variables
const filters = document.querySelector('.filters');
const img_icon_expand = document.querySelectorAll('.icon_expand');
const icon_expand_ingredients = document.querySelector('.icon_expand_ingredients');
const icon_less_ingredients = document.querySelector('.icon_less_ingredients');
const input_search_bar_ingredients = document.querySelector('.input_searchbar_ingredients');
const dropdown_menu_ingredients = document.querySelector('.dropdown-menu-ingredients');
const input_search_bar_appareils = document.querySelector('.input_searchbar_appareils');
const dropdown_menu_appareils = document.querySelector('.dropdown-menu-appareils');
const input_search_bar_ustensils = document.querySelector('.input_searchbar_ustensiles');
const dropdown_menu_ustensils = document.querySelector('.dropdown-menu-ustensiles');
let array_filters = [];
let array_filters2 = [];
let array_filters3 = [];
let recipes_data = recipes;
// Searchbar
const searchBar = document.querySelector(".input_searchbar");
searchBar.addEventListener("keyup", (e) => {
    const searchedLetters = e.target.value
    filterElements(searchedLetters, recipes)
});

function filterElements (letters, recipes) {
    if (letters.length > 2)
    {
        recipes_data = recipes.filter(recipe => recipe.description.includes(letters))
        setAppliances(recipes_data)
        setIngredients(recipes_data)
        setUstensils(recipes_data)
        cleanAllRecipes();
        return showRecipes(recipes_data);
    }
    if (letters.length < 2)
    {
        recipes_data = recipes;
        setAppliances(recipes_data)
        setIngredients(recipes_data)
        setUstensils(recipes_data)
        cleanAllRecipes();
        return showRecipes(recipes_data);
    }

}

// Listeners
icon_expand_ingredients.addEventListener('click', function() {
    showDropdownMenu();
})
img_icon_expand[1].addEventListener('click', function() {
    closeDropdownMenu();
} )
img_icon_expand[2].addEventListener('click', function() {
    closeDropdownUstensils();
} )
input_search_bar_ingredients.addEventListener('keyup', function() {
    showDropdownMenu()
})
input_search_bar_appareils.addEventListener('keyup', function() {
    showDropdownAppliances();
})
input_search_bar_ustensils.addEventListener('keyup', function() {
    showDropdownUstensils();
})
// Badges's functions
function createBadgeFilter (filter_picked) {
    filters_section = document.querySelector('.filters')
    new_filter = document.createElement('div')
    new_filter.textContent =  filter_picked
    filters_section.append(new_filter)
}
function creatAllBadgeFilters(){
    array_filters.forEach((filter) => {
        return createBadgeFilter(filter);
     })
}
// Ingredients's functions
function getAllIngredients() {
    let all_ingredients = [];
    recipes_data.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
        all_ingredients.push(ingredient.ingredient)
        })
    });
    all_ingredients = all_ingredients.map(x => x.toLowerCase())
    all_ingredients = Array.from(new Set(all_ingredients))
    all_ingredients.sort()
    all_ingredients.splice(3, 1)
    all_ingredients.splice(20, 1)
    all_ingredients.splice(41, 1)
    all_ingredients.splice(45, 1)
    all_ingredients.splice(84, 1)
    return all_ingredients;
}
function setAllIngredients() {
    document.querySelector('.list-ingredients').innerHTML = '';
    let array_all_ingredients = getAllIngredients()
    array_all_ingredients.forEach((ingredient) => {
        const list_ingredient = document.querySelector('.list-ingredients')
        let ingredient_item = document.createElement('li')
        ingredient_item.textContent = ingredient
        ingredient_item.addEventListener('click', () => {
            array_filters.push(ingredient)
            filterRecipesByAll()
        })
        list_ingredient.appendChild(ingredient_item)
})
}
function setIngredients(recipes_showed) {
    document.querySelector('.list-ingredients').innerHTML = '';
    recipes_showed.forEach((recipe_showed) => {
        recipe_showed.ingredients.forEach((item) => {
            const list_ingredient = document.querySelector('.list-ingredients')
            let ingredient_item = document.createElement('li')
            ingredient_item.textContent = item.ingredient
            ingredient_item.addEventListener('click', () => {
                array_filters.push(item.ingredient.toLowerCase())
                return filterRecipesByAll();
            })
            list_ingredient.appendChild(ingredient_item)
        })
    })

}
function showDropdownMenu () {
    const search_bar = document.querySelector('.input_searchbar_ingredients')
    icon_less_ingredients.style.display = 'block'
    icon_expand_ingredients.style.display = 'none'
    dropdown_menu_ingredients.style.display = 'block'
    search_bar.style.width = '476px'
    dropdown_menu_ingredients .style.width = '500px'
    filters.style.margin = '20px 0 150px 0'

}
function closeDropdownMenu () {
    const search_bar = document.querySelector('.input_searchbar_ingredients')
    dropdown_menu_ingredients.style.display = 'none'
    icon_less_ingredients.style.display = 'none'
    icon_expand_ingredients.style.display = 'block'
    search_bar.style.width = '196px'
    dropdown_menu_ingredients.style.width = '204px'
    filters.style.margin = '20px 0 20px 0'

}
// Appliances's functions
function getAllAppliances() {
    let all_appliances = [];
    recipes_data.forEach((recipe) => {
        all_appliances.push(recipe.appliance)
    });
    all_appliances = all_appliances.map(x => x.toLowerCase())
    all_appliances = Array.from(new Set(all_appliances))
    all_appliances.sort()
    return all_appliances;
}
function setAllAppliances() {
    document.querySelector('.list-appliances').innerHTML = '';
    let array_all_appliances = getAllAppliances()
    array_all_appliances.forEach((appliance) => {
        const list_appliances = document.querySelector('.list-appliances')
        let appliance_item = document.createElement('li')
        appliance_item.textContent = appliance
        appliance_item.addEventListener('click', () => {
            array_filters2.push(appliance)
            return filterRecipesByAll();
        })
        list_appliances.appendChild(appliance_item)
    })
}
function setAppliances(recipes_showed) {
    document.querySelector('.list-appliances').innerHTML = '';
    recipes_showed.forEach((recipe_showed) => {

            const list_appliances = document.querySelector('.list-appliances')
            let appliance_item = document.createElement('li')
            appliance_item.textContent = recipe_showed.appliance
            appliance_item.addEventListener('click', () => {
                array_filters2.push(recipe_showed.appliance.toLowerCase())
                return filterRecipesByAll();
            })
            list_appliances.appendChild(appliance_item)

    })
}
function showDropdownAppliances() {
    const search_bar = document.querySelector('.input_searchbar_appareils')
    dropdown_menu_appareils.style.display = 'block'
    search_bar.style.width = '476px'
    dropdown_menu_appareils.style.width = '500px'
    filters.style.margin = '20px 0 150px 0'
}
function closeDroppdownAppliances() {
    const search_bar = document.querySelector('.input_searchbar_appareils')
    dropdown_menu_appareils.style.display = 'none'
    search_bar.style.width = '196px'
    dropdown_menu_appareils.style.width = '204px'
    filters.style.margin = '20px 0 20px 0'
}
// Ustensils's functions
function getAllUstensils() {
    let all_ustensils = [];
    recipes_data.forEach((recipe) => {
        all_ustensils.push(recipe.ustensils)
    });
    all_ustensils = all_ustensils.flat().map(x => x.toLowerCase())
    all_ustensils = Array.from(new Set(all_ustensils))
    all_ustensils.sort()
    return all_ustensils;
}
function setAllUstensils() {
    document.querySelector('.list-ustensils').innerHTML = '';
    let array_all_ustensils = getAllUstensils()
    array_all_ustensils.forEach((ustensil) => {
        const list_ustensils = document.querySelector('.list-ustensils')
        let ustensil_item = document.createElement('li')
        ustensil_item.textContent = ustensil
        ustensil_item.addEventListener('click', () => {
            array_filters3.push(ustensil)
            return filterRecipesByAll();
        })
        list_ustensils.appendChild(ustensil_item)
    })
}
function setUstensils(recipes_showed) {
    document.querySelector('.list-ustensils').innerHTML = '';
    recipes_showed.forEach((recipe_showed) => {
        recipe_showed.ustensils.forEach((item) => {
            const list_ustensil = document.querySelector('.list-ustensils')
            let ustensil_item = document.createElement('li')
            ustensil_item.textContent = item
            ustensil_item.addEventListener('click', () => {
                array_filters3.push(item.toLowerCase())
                return filterRecipesByAll();
            })
            list_ustensil.appendChild(ustensil_item)
        })
    })
}
function showDropdownUstensils() {
    const search_bar = document.querySelector('.input_searchbar_ustensiles')
    dropdown_menu_ustensils.style.display = 'block'
    search_bar.style.width = '476px'
    dropdown_menu_ustensils.style.width = '500px'
    filters.style.margin = '20px 0 150px 0'
}
function closeDropdownUstensils() {
    const search_bar = document.querySelector('.input_searchbar_ustensiles')
    dropdown_menu_ustensils.style.display = 'none'
    search_bar.style.width = '196px'
    dropdown_menu_ustensils.style.width = '204px'
    filters.style.margin = '20px 0 20px 0'
}
// Recipes's functions
function cleanAllRecipes() {
    const recipesSection = document.querySelector(".recipes_section");
    recipesSection.innerHTML = '';
}
function filterRecipesByIngredients () {

    let showed_recipes_array = recipes_data.filter(recipe => {
        const array_object_ingredients = recipe.ingredients.flatMap(item => item.ingredient.toLowerCase())
        return recipe.ingredients.filter(item => array_filters.every(i => array_object_ingredients.includes(i))).length > 0
    })
    if (array_filters.length < 1){
        return recipes_data;
    } else {
        return showed_recipes_array;
    }

}
function filterRecipesByAppliances() {

    let showed_recipes_array2 = recipes_data.filter(showed_recipe => array_filters2.includes(showed_recipe.appliance.toLowerCase()))
    if (array_filters2.length == 0){
        return recipes_data;
    } else {
        return showed_recipes_array2;
    }
}
function filterRecipesByUstensils() {
    let showed_recipes_array3 = recipes_data.filter(recipe =>
        {
            const array_ustensils = recipe.ustensils.flatMap(item => item.toLowerCase());
            return recipe.ustensils.filter(item => array_filters3.every(i => array_ustensils.includes(i))).length > 0
        })
    if (array_filters3.length == 0){
        return recipes_data;
    } else {
        console.log(showed_recipes_array3)
        return showed_recipes_array3;
    }
}
function filterRecipesByAll() {
    cleanAllRecipes();
    let recipes_by_ingredients = filterRecipesByIngredients();
    let recipes_by_appliances = filterRecipesByAppliances();
    let recipes_by_ustensils = filterRecipesByUstensils();
    let showed_recipes_array = recipes_by_ingredients.filter(recipe_by_ingredients => recipes_by_appliances.includes(recipe_by_ingredients))
    showed_recipes_array = showed_recipes_array.filter(showed_recipe => recipes_by_ustensils.includes(showed_recipe))

    setAppliances(showed_recipes_array);
    setUstensils(showed_recipes_array);
    setIngredients(showed_recipes_array);
    creatAllBadgeFilters();
    return showRecipes(showed_recipes_array);
}
function showRecipes(recipes) {
    const recipesSection = document.querySelector(".recipes_section");
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const userCardDOM = recipeModel.getUserCardDOM();
        recipesSection.appendChild(userCardDOM);
    });
};
// Initialisation function
function init() {
    setAllIngredients();
    setAllAppliances();
    setAllUstensils();
    showRecipes(recipes);
};

init();