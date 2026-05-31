import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todosSlice";
import { filterReducer } from "./filter/filterSlice";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export let persistor = persistStore(store);

// const localStorData = localStorage.getItem("context")
//   const [context, setContext] = useState(JSON.parse(localStorData) || [{ id: 1 }]);

//   useEffect(() => {
//     localStorage.setItem("context", JSON.stringify(context));
//   }, [context]);
