import { combineReducers } from "redux";
import { IStore } from "../types";
import { busketPageReducer } from "./busket/reducer";
import { catalogPageReducer } from "./catalog/reducer";


export const rootReducer = combineReducers({
  catalogPage: catalogPageReducer,
  busketPage: busketPageReducer,
});
