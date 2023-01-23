/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import CONFIG from '../../data/config';

const ComCardHome = (restaurant) => `

  <div class="card-home">
    <div class="card-content-poster">
      <img src="./placeholder.png" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
      alt="${restaurant.name}" width="100%" class="lazyload" tabindex="0">
    </div>
    <div class="card-body">
      <div class="card-body-rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <span>(${restaurant.rating})</span>
      </div>
      <div class="card-body-content">
        <h2 class="restaurant_title" tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
        <p tabindex="0">${restaurant.description}</p>
      </div>
    </div>
  </div>

`;

const ComCardDetailPoster = (restaurant) => `

      <img src="./placeholder.png" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" width="100% height="250px" class="lazyload" tabindex="0">  `;

const ComCardDetailContent = (restaurant) => `

      <h2 tabindex="0">Deskripsi ${restaurant.name}</h2>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
      <br>
      <p tabindex="0">${restaurant.description}</p>
      <br>
      <br>`;

const ComCardDetailMenuFood = (food) => `
          <li tabindex="0">${food.name}</li>`;

const ComCardDetailMenuDrink = (drink) => `
          <li tabindex="0">${drink.name}</li>`;

const ComCardDetailReview = (review) => `
      <li tabindex="0"><h3>${review.name}<h3></li>
      <li tabindex="0"><p>${review.review}, ${review.date}</p></li>
      <br>`;

const createLikeCafeButtonTemplate = () => `
      <button aria-label="like this restaurant" id="likeButton" class="like">
         <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
    `;

const createUnlikeCafeButtonTemplate = () => `
      <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    `;
export {
  ComCardHome, ComCardDetailPoster, ComCardDetailContent,
  ComCardDetailMenuFood, ComCardDetailMenuDrink, ComCardDetailReview,
  createLikeCafeButtonTemplate, createUnlikeCafeButtonTemplate,
};
