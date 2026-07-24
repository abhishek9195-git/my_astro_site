
export interface ICity {
  id: number;
  name: string;
  slug: string;
  last_updated: string;
  gold_prices: any[]
}

export interface IState {
  id: number;
  name: string;
  slug: string;
  last_updated: string;
  gold_prices: any[];
  cities: ICity[];
}

export interface ICountry {
  id: number;
  name: string;
  slug: string;
  last_updated: string;
  gold_prices: any[];
  states: IState[];
}