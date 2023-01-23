/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.minifed.css';
import '../styles/responsive.css';
import App from './views/app';
import RegisterServiceWorker from './serviceWorker/register';

const app = new App({
  button: document.querySelector('#btn-menu'),
  drawer: document.querySelector('.nav ul'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  RegisterServiceWorker();
});

const loader = document.querySelector('.loader');
window.onload = function () {
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2500);
};
