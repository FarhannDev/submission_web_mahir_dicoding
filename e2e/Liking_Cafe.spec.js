/* eslint-disable max-len */
/* eslint-disable codeceptjs/no-pause-in-scenario */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Cafe');

Scenario('liking one restaurant', ({ I }) => {
  I.amOnPage('/');
  I.forceClick(locate('.restaurant_title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite'); // Restaurant telah ditambakan ke menu favorite
  I.saveScreenshot('like.png');
});
