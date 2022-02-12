import { rootReducer } from "./redux/reducers";

export interface IDealer {
  id: string;
}

export interface IProductItem {
  name: string;
  price: number;
  image: string;
}

export interface ICatalogPage {
  products: IProductItem[];
}

export interface IBusketItem extends IProductItem {
  totalCount: number;
  totalCost: number;
}

export interface IBusketPage {
  allTotalCount: number;
  allTotalCost: number;

  busketItems: { [name: string]: IBusketItem };
}

export interface IStore {
  catalogPage: ICatalogPage;

  busketPage: IBusketPage;
}

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType

export type AppStateType = ReturnType<RootReducerType>;
