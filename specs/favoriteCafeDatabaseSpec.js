/* eslint-disable no-undef */
import DATABASE from '../src/scripts/data/database';
import { Contract } from './contract/Contract';

describe('Favorite restaurant Contract Test Implementation', () => {
  afterEach(async () => {
    (await DATABASE.getAllRestaurant()).forEach(async (restaurant) => {
      await DATABASE.deleteRestaurant(restaurant.id);
    });
  });

  Contract(DATABASE);
});
