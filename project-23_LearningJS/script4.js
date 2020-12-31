const shoppingList = ["Milk", "Eggs", "ham", "Bacon", "Sausage", "Frijoles"];

// Foreach
shoppingList.forEach((product, index) => {
    //console.log(`The index is ${index} and the product is ${product}`);
})

// Map
const newList = shoppingList.map(item => item + " just adding a string");
    // console.log(newList);

// Filter
const filterList = shoppingList.filter(item => item !== "Eggs");
    // console.log(filterList);



    onlinecentral-bootstrap-03
