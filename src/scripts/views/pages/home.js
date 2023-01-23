/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-empty-function */
import HarmonyCafeSource from '../../data/source';
import { ComCardHome } from '../component/component';
import { skeletonUIHome } from '../skeleton/skeletonUI';

const Home = {
  async render() {
    return `
    <div class="main-container-home">
      <div class="view-home-poster">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
          <img src="./images/hero-image_4-large.jpg"  alt="home poster" width="100%">
        </picture>
      </div>
      <div class="list-preview-home">
        ${skeletonUIHome(20)}
      </div>
    </div>

    `;
  },

  async afterRender() {
    const restaurant = await HarmonyCafeSource.Home();
    const container = document.querySelector('.list-preview-home');
    container.innerHTML = '';

    restaurant.forEach((restaurant) => {
      container.innerHTML += ComCardHome(restaurant);
    });
  },
};

export default Home;
