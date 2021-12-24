import onChange from 'on-change';
// import i18next from 'i18next';
import renderValid from './render/renderValid';

const watchState = (state) => onChange(state, (path, value) => {
  // const input = document.querySelector('input');
  // const validateParagh = document.querySelector('.feedback');
  console.log(state);
  switch (path) {
    case 'validate':
      renderValid(state, value);
      break;
    default:
      console.log('123');
  }
});
export default watchState;

/**
  if (path === 'validate') {
    if (value === 'invalid') {
      input.classList.add('is-invalid');
      input.value = '';
      validateParagh.textContent = state.textError;
      validateParagh.classList.remove('text-success');
      validateParagh.classList.add('text-danger');
    } else {
      input.classList.remove('is-invalid');
      input.value = '';
      validateParagh.textContent = i18next.t('isValid');
      validateParagh.classList.remove('text-danger');
      validateParagh.classList.add('text-success');
    }
  }
 */