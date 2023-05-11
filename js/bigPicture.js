import { checkForm } from './form.js';

const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUplButton = document.querySelector('.img-upload__cancel');

function closeImgUpload() {
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', escapeKeyHandler);
}

function escapeKeyHandler(ev) {
  if (ev.key === 'Escape') {
    closeImgUpload();
  }
}

function openImgUpload() {
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKeyHandler);
}

fileInput.addEventListener('change', openImgUpload);
closeImgUplButton.addEventListener('click', closeImgUpload);

checkForm();


export {closeImgUpload};
