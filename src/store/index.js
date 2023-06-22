import {createStore, applyMiddleware, compose,} from 'redux'
import axios from 'axios'
import thunk  from 'redux-thunk' 
import {composeWithDevTools} from 'redux-devtools-extension'
import * as api from '../config'

import { rootReducer  } from './root-reducer'

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument(
  {  client : axios,
    api,  }
) )) )