import thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';
import { createStore, applyMiddleware, compose } from 'redux';

class Store {
  get composeEnhancers () {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  build () {
    const enhancers = this.composeEnhancers(applyMiddleware(thunk));
    return createStore(rootReducer, {}, enhancers);
  }
}

export default function () {
  const store = new Store();
  return store.build();
}
