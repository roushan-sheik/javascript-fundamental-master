// Remove falsy values from any array
let items = ["🍎", false, "🍊", NaN, 0, undefined, "🌶️", null, "", "🥭"];
// passing Boolean to array.filter() will remove falsy values from array
let fruits = items.filter(Boolean);

console.log(fruits); // ['🍎', '🍊', '🌶️', '🥭']
