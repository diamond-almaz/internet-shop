export interface IDealer {
  id: string;
}

export interface IProductItem {
  name: string;
  price: number;
  image: string;
}

export interface ICatalogPage {
  products: { [name: string]: IProductItem };

  selectedDealers: IDealer[];
  loading: boolean;
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

export interface IAction<T> {
  type: T;
}
