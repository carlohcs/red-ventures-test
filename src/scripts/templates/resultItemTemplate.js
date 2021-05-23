/*
const data = [{id: 1;
  name: "Euphorbia eritrea";
  price: 25;
  staff_favorite: true;
  sun: "high";
  toxicity: false;
  url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png";
  water: "rarely"
}]
*/
// src="/src/images/plants/bunny-ears-cacti.jpg"

const resultItemTemplate = (data) => {
  return `
<div class="result__item">
  ${
    data.staff_favorite
      ? '<div class="result__item__badge">Staff favorite</div>'
      : ""
  }
  <div class="result__item__image">
    <img
      src="${data.url}"
      class="img-responsive"
      alt="${data.name}"
    />
  </div>
  <div class="result__item__description">${data.name}</div>
  <div class="result__item__price__actions">
    <div class="result__item__price__actions__price">$${data.price}</div>
    <div class="result__item__price__actions__actions">
      <span class="icon icon--xs icon--pet icon--pet-${data.toxicity}"></span>
      <span class="icon icon--xs icon--sun icon--sun-${data.sun}"></span>
      <span class="icon icon--xs icon--drop icon--drop-${data.water}"></span>
    </div>
  </div>
</div>`;
};

export default resultItemTemplate;
