'use strict';

let formSubmit = document.getElementById('submit-button');

let logIn = function (event) {
  event.preventDefault();

  let inputLightTheme = event.target.light.checked; //.light.checked = true or false
  let inputDarkTheme = event.target.dark.checked;

  if (inputLightTheme) {
    homePageLight();
  } else if (inputDarkTheme) {
    homePageDark();
  }

};

formSubmit.addEventListener('submit', logIn);

let homePageLight = function () {
  console.log('light theme');
  document.getElementById('body-div').style.backgroundColor='#ffaec0';
  document.getElementById('body-div').style.color='black';
  document.getElementById('legend-div').style.backgroundColor='#f789a1';
  document.getElementById('login-form').style.backgroundColor='#f06c89';
  document.getElementById('login-submit').style.backgroundColor='#FFE9F3';
};

let homePageDark = function () {
  console.log('dark theme');
  document.getElementById('body-div').style.backgroundColor='#453F3C';
  document.getElementById('body-div').style.color='C1EDCC';
  document.getElementById('legend-div').style.backgroundColor='#534e4c';
  document.getElementById('login-form').style.backgroundColor='#797270';
  document.getElementById('login-submit').style.backgroundColor='#C1EDCC';
};

