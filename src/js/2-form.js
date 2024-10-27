const FORM_DATA_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

popText();

form.addEventListener('submit', event => {
  event.preventDefault();
  const formValues = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (formValues.email === '' || formValues.message === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(formValues);

  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_KEY);
});

form.addEventListener('input', event => {
  saveToLocalStorage();
});

function saveToLocalStorage() {
  const formValues = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formValues));
}

function popText() {
  const savedMessage = JSON.parse(localStorage.getItem(FORM_DATA_KEY));

  if (savedMessage) {
    emailInput.value = savedMessage.email || '';
    messageInput.value = savedMessage.message || '';
  }
}
g;
