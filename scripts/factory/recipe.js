function recipeFactory(data) {
    const { name, description, ingredients, time } = data;

    function ingredientLabel({ unit, quantity, ingredient }) {
        if (quantity && !unit) return ingredient + ' : ' + quantity;
        if (quantity && unit) return ingredient + ' : ' + quantity + unit;
        return ingredient;
    }


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const div_img_recipe = document.createElement('div')
        div_img_recipe.setAttribute('class', 'div_img_recipe')
        article.prepend(div_img_recipe);

        const img = document.createElement( 'img' );
        img.setAttribute('class', 'img_recipe')
        img.setAttribute('src', '../assets/icones/placeholder.svg')
        div_img_recipe.appendChild(img)

        const div_header_card = document.createElement('div')
        div_header_card.setAttribute('class', 'header_card')

        const div_recipes_title = document.createElement('div')
        div_recipes_title.setAttribute('class', 'recipes_titles')
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        div_recipes_title.appendChild(h2)

        const div_recipe_time = document.createElement('div')
        div_recipe_time.setAttribute('class', 'recipe_time')

        const timer_img = document.createElement( 'img' );
        timer_img.setAttribute('class', 'timer_img')
        timer_img.setAttribute('src', '../assets/icones/watch_later-24px 1.svg')
        div_recipe_time.appendChild(timer_img)
        const h4 = document.createElement( 'h4' );
        h4.textContent = time + " min" ;
        div_recipe_time.appendChild(h4)


        const recipe_body = document.createElement('div')
        recipe_body.setAttribute('class', 'recipe_body')
        const span1 = document.createElement('div');
        span1.setAttribute("class", "recipe_description");
        const p_description = document.createElement('p')
        p_description.setAttribute('class', 'description_paragraph')
        p_description.textContent = description;
        

        const span3 = document.createElement('div')
        span3.setAttribute('class', 'recipe_ingredients')
        const recipe_list_ingredients = document.createElement('ul')
        recipe_list_ingredients.setAttribute('class', 'recipe_list_ingredients')
        span3.prepend(recipe_list_ingredients)
        ingredients.forEach(ingredieent => {
            const elt = document.createElement('li');
            const { unit, quantity, ingredient } = ingredieent;
            elt.textContent = ingredientLabel(ingredieent);
            recipe_list_ingredients.appendChild(elt)
              
        });

        article.appendChild(div_header_card);
        
        div_header_card.appendChild(div_recipes_title);
        div_header_card.appendChild(div_recipe_time);
        article.appendChild(recipe_body);
        recipe_body.appendChild(span3);    
        recipe_body.appendChild(span1);
        span1.appendChild(p_description);
        return (article);
    }
    
    return { data, getUserCardDOM }
}