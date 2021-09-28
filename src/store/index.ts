import { createStore, compose } from 'redux';
import reducer from './reducers';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducer,  
  composeEnhancers()
);

export default store;