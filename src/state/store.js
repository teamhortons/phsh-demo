import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import epics from './epics';


const createAppStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const middleware = [
    thunkMiddleware,
    epicMiddleware,
  ];

  const store = createStore(
    reducer,
    applyMiddleware(...middleware),
  );

  epicMiddleware.run(epics);
  return store;
};

export default createAppStore;
