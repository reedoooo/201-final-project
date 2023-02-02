'use strict';

import setTheme from './login.js';

window.addEventListener('load', function () {
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }
});

let state = {
  projects: [],
  notes: [
    {
      title: 'CSS Notes',
      text: 'These are my notes about CSS. CSS is frickin sweet.'
    },
    {
      title: 'HTML Notes',
      text: 'These are my really well formatted HTML notes. Semantic tags are cool.'
    },
    {
      title: 'JavaScript Notes',
      text: 'JavaScript is my favorite language! Constructors are fun!'
    }
  ],
}

function saveAllToLocalStorage() {
  localStorage.setItem('portfolioState', JSON.stringify(state));
}

function retrieveAllFromLocalStorage() {
  state = JSON.parse(localStorage.getItem('portfolioState'));
}

