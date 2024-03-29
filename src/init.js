import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from 'i18next';
import ru from './locales/ru';
import watchState from './watch';
import app from './app';

const runApp = async () => {
  const state = {
    form: {
      inputUrl: '',
      feeds: [],
      posts: [],
      rssLinks: [],
      error: '',
      currentPost: null,
      readRss: [],
    },
    validateForm: null,
  };

  i18next.init({
    lng: 'ru',
    resources: {
      ru,
    },
  }).then(() => {
    app(state, watchState(state));
  });
};
export default runApp;
