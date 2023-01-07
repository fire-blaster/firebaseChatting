import { createStore } from "@reduxjs/toolkit";
import statusReducer from './reducer';


const store=createStore(statusReducer)

export default store;