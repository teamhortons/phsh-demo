import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const createAppStore = () => {

  const middleware = [
    thunkMiddleware,
  ];

  const store = createStore(
    reducer,
    applyMiddleware(...middleware),
  );

  return store;
};

export default createAppStore;
