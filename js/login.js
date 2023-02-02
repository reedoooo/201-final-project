let darkArray = ['#453F3C', '#C1EDCC', '#534e4c', '#797270', '#C1EDCC'];
let lightArray = ['#ffaec0', '#000000', '#f789a1', '#f06c89', '#FFE9F3', 'rgb(121, 114, 112, .6)', '#797270', '#B27092', '#87BAAB', '#512D38', '#f6c2d9', '#62AC96','#453F3C'];

function setTheme(theme) {
  if (theme === 'dark') {
    document.getElementById('body-div').style.backgroundColor = darkArray[0];
    document.getElementById('body-div').style.color = darkArray[1];
    document.getElementById('login-form').style.backgroundColor = darkArray[3];
    document.getElementById('login-submit').style.backgroundColor = darkArray[4];

    if (document.getElementById('formDiv')) {
      document.getElementById('formDiv').style.color = darkArray[0];
      document.getElementById('formDiv').style.backgroundColor = darkArray[3];
    }

    if (document.getElementById('html-id')) {
      document.getElementById('html-id').style.backgroundColor = darkArray[0];
    } else {
      document.getElementById('html-id').style.backgroundColor = lightArray[0];
    }
    if (document.getElementById('addFolders')) {
      document.getElementById('addFolders').style.backgroundColor = darkArray[3];
      document.getElementById('addFolders').style.color = darkArray[1];
    }
    if (document.getElementById('addFolder')) {
      document.getElementById('addFolder').style.backgroundColor = darkArray[1];
      document.getElementById('addFolder').style.color = darkArray[2];
    }
    if (document.getElementById('deleteFolders')) {
      document.getElementById('deleteFolders').style.backgroundColor = darkArray[3];
      document.getElementById('deleteFolders').style.color = darkArray[1];
    }
    if (document.getElementById('deleteFolder')) {
      document.getElementById('deleteFolder').style.backgroundColor = darkArray[1];
      document.getElementById('deleteFolder').style.color = darkArray[2];
    }

    for (let i = 0; i < 1; i++) {
      if (document.getElementById(`legend-div${i}`)) {
        document.getElementById(`legend-div${i}`).style.backgroundColor = darkArray[2];
        console.log('test2');
        document.getElementById(`legend-div${i}`).style.color = darkArray[1];
        console.log('test3');
      }
    }

  } else {

    console.log('test');
    if (document.getElementById('login-form')) {
      document.getElementById('login-form').style.backgroundColor = lightArray[0];
      document.getElementById('login-form').style.color = lightArray[1];
    }
    if (document.getElementById('login-submit')) {
      document.getElementById('login-submit').style.backgroundColor = lightArray[4];
    }

    if (document.getElementById('body-div')) {
      document.getElementById('body-div').style.backgroundColor = lightArray[8];
      document.getElementById('body-div').style.color = lightArray[1];
    }
    // if (document.getElementById('formDiv')) {
    //   document.getElementById('formDiv').style.backgroundColor = lightArray[2];
    // }
    // if (document.getElementById('name').firstElementChild) {
    //   console.log('child');
    //   document.getElementById('name').firstElementChild.style.backgroundColor = lightArray[1];
    // } else if (document.getElementById('name').lastElementChild) {
    //   document.getElementById('name').lastElementChild.style.backgroundColor = lightArray[1];
    // }



    if (document.getElementById('addFolders')) {
      document.getElementById('addFolders').style.backgroundColor = lightArray[2];
      document.getElementById('addFolders').style.color = lightArray[1];
    }
    if (document.getElementById('addResume')) {
      document.getElementById('addResume').style.backgroundColor = lightArray[2];
      document.getElementById('addResume').style.color = lightArray[12];
    }
    if (document.getElementById('addFolder')) {
      document.getElementById('addFolder').style.backgroundColor = lightArray[4];
      document.getElementById('addFolder').style.color = lightArray[12];
    }
    if (document.getElementById('pdfFileInput')) {
      document.getElementById('pdfFileInput').style.backgroundColor = lightArray[0];
      document.getElementById('pdfFileInput').style.color = lightArray[1];
    }
    if (document.getElementById('deleteFolders')) {
      document.getElementById('deleteFolders').style.backgroundColor = lightArray[2];
      document.getElementById('deleteFolders').style.color = lightArray[1];
    }
    if (document.getElementById('deleteFolder')) {
      document.getElementById('deleteFolder').style.backgroundColor = lightArray[4];
      document.getElementById('deleteFolder').style.color = lightArray[12];
    }
    if (document.getElementById('logo-id')) {
      document.getElementById('logo-id').style.color = lightArray[4];
    }
    if (document.getElementById('nav-div')) {
      document.getElementById('nav-div').style.backgroundColor = lightArray[5];
    }
    if (document.getElementById('confirm-button')) {
      document.getElementById('confirm-button').style.backgroundColor = lightArray[4];
    }
    // if (document.getElementById('folder')) {
    //   document.getElementById('folder').style.backgroundColor = lightArray[2];
    // }

    if (document.getElementById('html-id')) {
      document.getElementById('html-id').style.backgroundColor = lightArray[8];
    } else if (theme === 'dark') {
      document.getElementById('html-id').style.backgroundColor = darkArray[0];
    }

    for (let i = 1; i < 8; i++) {
      if (document.getElementById(`label-form${i}`)) {
        document.getElementById(`label-form${i}`).style.color = lightArray[4];
        console.log('test5');
      }
    }
    for (let i = 0; i < 8; i++) {
      if (document.getElementById(`formDiv${i}`)) {
        document.getElementById(`formDiv${i}`).style.backgroundColor = lightArray[2];
        document.getElementById(`formDiv${i}`).style.color = lightArray[4];
        console.log('test5');
      }
    }
    for (let i = 0; i < 6; i++) {
      if (document.getElementById(`fieldset-id${i}`)) {
        document.getElementById(`fieldset-id${i}`).style.color = lightArray[2];
        console.log('test6');
      }
    }

    for (let i = 1; i < 20; i++) {
      if (document.getElementById(`li${i}`)) {
        document.getElementById(`li${i}`).style.color = lightArray[4];
      }
    }
    for (let i = 1; i < 3; i++) {
      if (document.getElementById(`submit-button${i}`)) {
        document.getElementById(`submit-button${i}`).style.backgroundColor = lightArray[2];
        document.getElementById(`submit-button${i}`).style.color = lightArray[12];
      }
    }
    // for (let i = 1; i < 10; i++) {
    //   if (document.getElementsByClassName(`folder${i}`)) {
    //     document.getElementsByClassName(`folder${i}`).style.backgroundColor = lightArray[4];
    //   }

    // }

    for (let i = 0; i < 6; i++) {
      if (document.getElementById(`legend-div${i}`)) {
        document.getElementById(`legend-div${i}`).style.color = lightArray[4];
        document.getElementById(`legend-div${i}`).style.backgroundColor = lightArray[2];
        console.log('test8');

      }

    }
    for (let i = 0; i < 7; i++) {
      if (document.getElementById(`${i}`)) {
        document.getElementById(`${i}`).style.backgroundColor = lightArray[2];
        document.getElementById(`${i}`).style.borderColor = lightArray[10];
        document.getElementById(`${i}`).style.backgroundColor = lightArray[10];
        console.log('test4');
      }
    }

    // for (let i = 0; i < 3; i++) {
    //   if (document.getElementById(`name${i}`)) {
    //     document.getElementById(`name${i}`).style.backgroundColor = lightArray[1];
    //     console.log('test7');
    //   }
    // }

  }

  localStorage.setItem('theme', theme);
}
(function () {
  'use strict';

  let formSubmit = '';

  if (document.getElementById('submit-button1')) {
    formSubmit = document.getElementById('submit-button1');
  } else {
    formSubmit = document.getElementById('submit-button2');
  }

  let confirmInfo = document.getElementById('confirm-button');

  let logIn = function (event) {
    event.preventDefault();

    let inputLightTheme = document.querySelector('input[name="form"][value="light"]').checked;
    let inputDarkTheme = document.querySelector('input[name="form"][value="dark"]').checked;

    if (inputDarkTheme) {
      setTheme('dark');
    } else if (inputLightTheme) {
      setTheme('light');
    }
  };
  if (formSubmit) {
    formSubmit.addEventListener('submit', logIn);
  }


  window.addEventListener('load', function () {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  });
  if (confirmInfo) {
    confirmInfo.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }
})();

// module.exports = setTheme;

