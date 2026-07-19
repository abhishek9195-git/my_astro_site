export interface Price {
  carat?: string;       // for gold
  unit: string;         // "per_10g" or "per_kg"
  price: number;
  date: string;
}

export interface City {
  name: string;
  slug: string;
  gold_prices: Price[];
  silver_prices: Price[];
  platinum_prices: Price[];
}

export interface State {
  name: string;
  slug: string;
  gold_prices: Price[];
  silver_prices: Price[];
  platinum_prices: Price[];
  cities: City[];
}

export interface Country {
  name: string;
  slug: string;
  gold_prices: Price[];
  silver_prices: Price[];
  platinum_prices: Price[];
  states: State[];
}

export interface DataFile {
  countries: Country[];
}