
export const fetchMeals = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://territory-meals-api.herokuapp.com/meals', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => {
      return json.meals
    });
}
