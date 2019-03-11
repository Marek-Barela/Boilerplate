export const getCounterFromSwapi = () => {
  return fetch('https://swapi.co/api/people/1/')
    .then(res => res.json())
    .then(res => { return res })
    .catch(err => console.log(err))
}