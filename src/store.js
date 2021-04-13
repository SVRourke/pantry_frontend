import { createStore } from 'redux'
import itemReducer from "./reducers/ItemReducer"
import { TestLists } from "./common/TestData"


function configureStore(state = TestLists) {
  return createStore(itemReducer, state)
}
export default configureStore


// SWITCH TO COMBINE REDUCERS