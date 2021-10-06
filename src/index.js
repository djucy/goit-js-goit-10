import './style.css';
import createMenu from './templates/menu.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menuList: document.querySelector('.js-menu'),
    btnToggle: document.querySelector('.theme-switch__toggle'),
    body: document.body,
};

(function () {
    refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));
    refs.body.classList.add(localStorage.getItem('Theme') ?? Theme.LIGHT);
    refs.btnToggle.checked = localStorage.getItem('Theme') === Theme.DARK;
})();

refs.btnToggle.addEventListener('click', onChangeTheme);
function onChangeTheme({ target: { checked}}) {
    checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
}

function toggleTheme(add, rem) {
    refs.body.classList.replace(rem, add);
    localStorage.setItem('Theme', add);
 }









