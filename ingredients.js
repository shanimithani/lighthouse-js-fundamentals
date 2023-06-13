const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let x = 0
while (x < ingredients.length) {
    console.log(ingredients[x]);
    x++;
}
// Write a for loop that prints out the contents of ingredients:

for (x = 0; x < ingredients.length; x++) {
    console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let y = ingredients.length - 1;
while (y >= 0) {
    console.log(ingredients[y]);
    y--;
}