export const trending = "https://api.coingecko.com/api/v3/search/trending/";
export const allCoins =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";
export const coinData = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?localization=false`;
export const historicalData = (id, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
