import {combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import{createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import { jobsReducer } from './reducers/JobsReducer'
import {loaderReducer} from './reducers/loaderReducer'


const rootReducer=combineReducers({
    jobsReducer:jobsReducer,
    loaderReducer:loaderReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk )
      // other store enhancers if any
    )
  );

  export default store;