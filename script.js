const greetingForm = document.querySelector('#greetingForm');
const nameInput = document.querySelector('#name');
const greeting = document.querySelector('#greeting');
const colorBoxes = document.querySelectorAll('.color-box');

greetingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Hello, ${name}` : 'Hello';
});

colorBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    colorBoxes.forEach((item) => item.classList.remove('active'));
    box.classList.add('active');
  });
});
