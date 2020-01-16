import {createStore} from 'redux' 
import Reducer from './reducer'

//  Store prend le Reducer comme 
//parameter(Reducer fih les actions w les state)
const Store=createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store