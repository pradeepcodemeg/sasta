import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DashboardSlice from './slices/dashboard'
import orderSlice from './slices/Order'
import UsersSlice from "./slices/UsersSlice";
import LoginSlice from "./slices/LoginSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";


// Define the persistConfig
const persistConfig = {
    key: "root", // Root key in storage
    storage, // Use local storage
    whitelist: ["Signature"], // List of reducers you want to persist
};

  
const rootReducer = combineReducers({
    Dashboard: DashboardSlice,
    Order: orderSlice,
    users: UsersSlice,
    Signature: persistReducer(persistConfig, LoginSlice), // Wrap LoginSlice with persistReducer
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
// Create a persisted version of the store
const persistedStore = persistStore(store);

export { store, persistedStore };