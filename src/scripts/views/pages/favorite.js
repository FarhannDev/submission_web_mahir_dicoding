/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-empty-function */
import HarmonyCafeDatabase from '../../data/database';
import { ComCardHome } from '../component/component';
import { skeletonUIHome } from '../skeleton/skeletonUI';

const Favorite = {
  async render() {
    return `
    <div class="main-container-favorite">
      <div class="list-preview-home">
       ${skeletonUIHome(20)}
      </div>  
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await HarmonyCafeDatabase.getAllRestaurant();
    const container = document.querySelector('.list-preview-home');
    container.innerHTML = '';

    restaurant.forEach((restaurant) => {
      container.innerHTML += ComCardHome(restaurant);
    });
  },
};

export default Favorite;
