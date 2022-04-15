var throttle = require('lodash.throttle');


const formEl = document.querySelector('.feedback-form');
const buttonEl = document.querySelector('button[type="submi"]');
const refs = {
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
let formData = {};
const FEEDBACK_FORM_STATE = "feedback-form-state";
const localStorageParsed = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE))

formEl.addEventListener('input', throttle(onInputValueChange, 500));
buttonEl.addEventListener('click',onSubmitBtnClick)

function onSubmitBtnClick(event) {
    event.preventDefault();
    console.log({email: refs.input.value, message: refs.textarea.value});
    formEl.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    formData = {};
}

function onInputValueChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}
onPageLoading()

function onPageLoading() {
    if (localStorage.getItem(FEEDBACK_FORM_STATE)) {
        if (localStorageParsed.email) {refs.input.value = localStorageParsed.email; }
        if(localStorageParsed.message) {refs.textarea.value = localStorageParsed.message;}
        formData = localStorageParsed;
    }
    
}