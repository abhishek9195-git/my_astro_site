const BASE_URL = import.meta.env.PUBLIC_API_URL;

export async function get_countries() {
  const res = await fetch(`${BASE_URL}/location/countries`);
  if (!res.ok) throw new Error("Failed to fetch countries");
  return res.json();
}

export async function get_states_by_country_slug(country_slug: string) {
  const res = await fetch(`${BASE_URL}/location/states/country/${country_slug}`);
  if (!res.ok) throw new Error("Failed to fetch countries");
  return res.json();
}

export async function get_cities_by_state_slug(state_slug: string) {
  const res = await fetch(`${BASE_URL}/location/cities/state/${state_slug}`);
  if (!res.ok) throw new Error("Failed to fetch countries");
  return res.json();
}

export async function get_latest_gold_price_by_slug(slug: string) {
  const res = await fetch(`${BASE_URL}/metals/gold/${slug}/latest`);
  if (!res.ok) throw new Error("Failed to fetch prices");
  return res.json();
}

export async function get_gold_price_history_by_slug_carat_and_days(slug: string, carat: string, days: number) {
  const res = await fetch(`${BASE_URL}/metals/gold/history/${slug}/${carat}/${days}`);
  if (!res.ok) throw new Error("Failed to fetch prices");
  return res.json();
}