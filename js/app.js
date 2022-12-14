'use strict';

(function () {
    function init() {
        let router = new Router([
            new Route('main', 'main/main.html', true),
            new Route('catalog', 'catalog/catalog.html'),
            new Route('about', 'about/about.html'),
            new Route('contact', 'contact/contact.html'),
        ]);
    }
    init();
}());

const menu = document.querySelector('#nav');
const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
})