'use strict';

let formSubmit = document.getElementById('login-submit');
let confirmInfo = document.getElementById('confirm-button');
// let radioButton = document.getElementsByClassName('radio');

let logIn = function (event) {
  event.preventDefault();

  let inputLightTheme = event.target.light.checked; //.light.checked = true or false
  let inputDarkTheme = event.target.dark.checked;

  if (inputDarkTheme) {
    setTheme('dark');
  } else if (inputLightTheme) {
    setTheme('light');
  }
};



formSubmit.addEventListener('submit', ()=> {
  logIn();
  let selectedTheme = document.querySelector('input[type="radio"][name="form"]').value;
  setTheme(selectedTheme);
  console.log(selectedTheme);
});

let darkArray = ['#453F3C','C1EDCC','#534e4c','#797270','#C1EDCC'];
let lightArray = ['#ffaec0','black','#f789a1','#f06c89','#FFE9F3'];

// localStorage.setItem('elementArray', JSON.stringify(elementArray));
// localStorage.setItem('lightTheme', JSON.stringify(lightArray));
// localStorage.setItem('darkTheme', JSON.stringify(darkArray));


function setTheme(theme) {
  if (theme === 'dark') {
    document.getElementById('body-div').style.backgroundColor=darkArray[0];
    document.getElementById('body-div').style.color=darkArray[1];
    document.getElementById('legend-div').style.backgroundColor=darkArray[2];
    document.getElementById('login-form').style.backgroundColor=darkArray[3];
    document.getElementById('login-submit').style.backgroundColor=darkArray[4];
  } else {
    document.getElementById('body-div').style.backgroundColor=lightArray[0];
    document.getElementById('body-div').style.color=lightArray[1];
    document.getElementById('legend-div').style.backgroundColor=lightArray[2];
    document.getElementById('login-form').style.backgroundColor=lightArray[3];
    document.getElementById('login-submit').style.backgroundColor=lightArray[4];
  }
  localStorage.setItem('theme', theme);
}

// On page load, check if a theme has been saved in local storage
window.addEventListener('load', function() {
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }
});

confirmInfo.addEventListener('click', changePage);

let changePage = function () {
  window.location.href = ('index.html');
};

module.exports = setTheme;

