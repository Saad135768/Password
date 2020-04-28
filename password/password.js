const div = document.querySelector('.container');
const buttonsParent = document.querySelector('.buttons');
let buttons = [...document.querySelectorAll('.buttons button')];
const h1 = document.querySelector('#password-h1');
const h2 = document.querySelector('#password-h2');
const h3 = document.querySelector('#password-h3');
const h4 = document.querySelector('#password-h4');
let sum = '';

//-----
let attempts = 4;
let attempt = () => {
  if (attempts <= 0) {
    h4.innerText = `You have to wait 5 mins . You are not authorized to proceed`;
    buttons.forEach((btn) => btn.setAttribute('disabled', 'true'));
    setTimeout(() => {
      buttons.forEach((btn) => btn.removeAttribute('disabled'));
      h4.innerText = ``;
    }, 5000);
  } else {
    h4.innerText = `You have only ${attempts--} attempts`;
  }
};
console.log(attempts);
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    sum += btn.value;
    h3.innerText = sum;

    const password = 0000;
    if (sum.length === 4) {
      sum.substr(4, 1);
      if (sum == password) {
        buttonsParent.classList.add('active');
        h1.innerText = 'Correct password';
        h2.innerText = 'You are authorized to pass';
        setTimeout(() => {
          h3.innerText = sum;
          div.remove();
        }, 1500);
      } else {
        attempt();
        h1.innerText = 'Sorry wrong password';
        h2.innerText = 'Try again';
        buttonsParent.classList.add('deactivate');
        setTimeout(() => {
          buttonsParent.classList.remove('deactivate');
        }, 1000);
        setTimeout(() => {
          h2.innerText = '';
          h3.innerText = '';
        }, 2000);
        sum = '';
      }
    }
  });
});
