/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import HarmonyCafeSource from '../../data/source';
import DATABASE from '../../data/database';
import URL from '../../routes/url';
import {
  ComCardDetailContent, ComCardDetailMenuDrink, ComCardDetailMenuFood, ComCardDetailPoster, ComCardDetailReview,
} from '../component/component';
import LikeButtonPresenter from '../../utils/like-button-presenter';

/* eslint-disable no-empty-function */
const Detail = {
  async render() {
    return `

    <div class="main-container-detail">
        <div class="card-detail">
        <div class="card-detail-poster"></div>
        <div class="card-detail-body">
          <div class="card-body-content"></div>
          <div class="card-detail-body-menu">
            <div class="card-detail-body-food"><h2>Menu makanan</h2><ul></ul></div>
            <div class="card-detail-body-drink"><h2>Menu minuman</h2><ul></ul></div>  
          </div>
          <br>
          <br>
          <div class="card-detail-body-review">
            <div class="review-content"><h2>Review</h2><br><ul></ul></div>
          </div>
        </div>  
      </div>
     <div id="likeButtonContainer"></div>
    </div>

    `;
  },

  async afterRender() {
    const url = URL.parseActiveUrlWithoutCombiner();
    const restaurant = await HarmonyCafeSource.Detail(url.id);

    const detailPoster = document.querySelector('.card-detail-poster');
    const detailContent = document.querySelector('.card-body-content');
    const detalMenuFood = document.querySelector('.card-detail-body-food ul');
    const detalMenuDrink = document.querySelector('.card-detail-body-drink ul');
    const detailReview = document.querySelector('.review-content ul');
    detailPoster.innerHTML += ComCardDetailPoster(restaurant.restaurant);
    detailContent.innerHTML += ComCardDetailContent(restaurant.restaurant);
    // Food list
    restaurant.restaurant.menus.foods.map((food) => {
      detalMenuFood.innerHTML += ComCardDetailMenuFood(food);
    });
    // Drink list
    restaurant.restaurant.menus.drinks.map((drink) => {
      detalMenuDrink.innerHTML += ComCardDetailMenuDrink(drink);
    });
    // Review list
    restaurant.restaurant.customerReviews.map((review) => {
      detailReview.innerHTML += ComCardDetailReview(review);
    });
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: DATABASE,
      restaurant: {
        id: restaurant.restaurant.id,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
      },
    });
  },
};

export default Detail;
