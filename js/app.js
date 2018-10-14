const createElementAndSetValue = function(element, value){
  const newElement = document.createElement(element);
  newElement.textContent = value;
  return newElement;
}

const addNewRestaurant = function (name, address, cuisine, rating){
  // creare a new div tag with the values above
  const newRestaurant = document.createElement('div');

  //create contents of the new div
  const newRestaurantName = createElementAndSetValue('h2', name);
  const newRestaurantAddress = createElementAndSetValue('h3', address);
  const newRestaurantCuisine = createElementAndSetValue('h5', cuisine);
  const newRestaurantRating = createElementAndSetValue('h5', rating);

  // appended each element to the new restaurant div
  newRestaurant.appendChild(newRestaurantName);
  newRestaurant.appendChild(newRestaurantAddress);
  newRestaurant.appendChild(newRestaurantCuisine);
  newRestaurant.appendChild(newRestaurantRating);

  newRestaurant.classList.add('restaurant-item');

  //access the DIV on which the new element will be appended
  const restaurantList = document.querySelector('#restaurant-list');

  //add the new restaurant div to the Restaurant list
  restaurantList.appendChild(newRestaurant);
}


const handleFormSubmit = function(event) {
  event.preventDefault();

  //get the values of the form fields
  const name = event.target.name.value;
  const address = event.target.address.value;
  const cuisine = event.target.cuisine.value;
  const rating = event.target.rating.value;
  // debugger;

  // console.log(name, address, cuisine, rating);

  addNewRestaurant(name, address, cuisine, rating);

  //clear the input fields
  const form = event.target;
  form.reset();

}

const handleDeleteAll = function(event) {

  const restaurantList = document.querySelector('#restaurant-list');
  // console.dir(restaurantList);
  // restaurantList.innerHTML = ''; //shortcut?
  while (restaurantList.firstChild) {
      restaurantList.removeChild(restaurantList.firstChild);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#deleteAll-btn');
  deleteAll.addEventListener('click', handleDeleteAll);

})
