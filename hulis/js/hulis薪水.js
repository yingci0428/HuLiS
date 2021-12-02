const title = document.querySelector('.city_1');

let svg = document.querySelector('svg');
// let taipei = document.getElementById("TWN1166");
// console.log(taipei);
svg.addEventListener("click", function (e) {
  const text = e.target.dataset['city']
  title.textContent = text;

});



