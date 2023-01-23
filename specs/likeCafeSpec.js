/* eslint-disable no-undef */
import DATABASE from '../src/scripts/data/database';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Cafe', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the Cafe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the Cafe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the Cafe', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await DATABASE.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    DATABASE.deleteRestaurant(1);
  });

  it('should not add a Cafe again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await DATABASE.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await DATABASE.getAllRestaurant()).toEqual([{ id: 1 }]);
    DATABASE.deleteRestaurant(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a Cafe when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await DATABASE.getAllRestaurant()).toEqual([]);
  });
});
