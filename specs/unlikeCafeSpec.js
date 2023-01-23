/* eslint-disable no-undef */
import DATABASE from '../src/scripts/data/database';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Cafe', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await DATABASE.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await DATABASE.deleteRestaurant(1);
  });

  it('should display unlike widget when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked cafe from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await DATABASE.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked cafe is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // hapus dulu film dari daftar film yang disukai
    await DATABASE.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await DATABASE.getAllRestaurant()).toEqual([]);
  });
});
