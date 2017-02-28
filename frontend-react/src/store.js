import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// import createLogger from 'redux-logger';
// const logger = createLogger();

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);
window.s = store;
export default store;
