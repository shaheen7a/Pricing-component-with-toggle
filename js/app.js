const btnSwitch = document.querySelector('.button-switch');
const btnBg = document.querySelector('.button-bg');

const basicHeader = document.getElementById('basic-h');
const proHeader = document.getElementById('pro-h');
const masterHeader = document.getElementById('master-h');


btnSwitch.addEventListener('click', function () {
  
  if (btnSwitch.classList.contains('button-switch-off')) {
    btnSwitch.classList.remove('button-switch-off');
    btnSwitch.classList.add('button-switch-on');
    // btnBg.style.backgroundImage= "red";
    basicHeader.innerHTML = '19.99';
    proHeader.innerHTML = '24.99';
    masterHeader.innerHTML = '39.99';

  } else {
    btnSwitch.classList.remove('button-switch-on');
    btnSwitch.classList.add('button-switch-off');
    basicHeader.innerHTML = '199.99';
    proHeader.innerHTML = '249.99';
    masterHeader.innerHTML = '399.99';
  }
})