/* eslint-disable codeceptjs/no-pause-in-scenario */
/* eslint-disable no-unused-vars */
Feature('unliking cafe');

Scenario('unliking one cafe', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant_title a');
  I.forceClick(locate('.restaurant_title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.saveScreenshot('unlike.png');
});
