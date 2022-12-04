let throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');
const message = document.querySelector('[name=message]');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

email.required = true;
message.required = true;
const Data = {};
StorageState();

feedbackForm.addEventListener('input', throttle(saveMessage, 500));
feedbackForm.addEventListener('submit', submitOnForm);

function saveMessage(event) {
  Data[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Data));
}

function submitOnForm(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(Data);
}

function StorageState() {
  const dataPreserved = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (dataPreserved) {
    const dataParsed = JSON.parse(dataPreserved);
    Object.entries(dataParsed).forEach(([name, value]) => {
      formData[name] = value;
      feedbackForm.elements[name].value = value;
    });
  }
}
