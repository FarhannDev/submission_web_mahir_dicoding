/* eslint-disable import/prefer-default-export */
import DATABASE from '../../src/scripts/data/database';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: DATABASE,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
