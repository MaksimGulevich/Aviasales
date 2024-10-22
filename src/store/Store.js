const rootReducer = combineReducers({
  counter: counterReducer,
})

// Создаем store
const store = createStore(rootReducer)
