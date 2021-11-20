export default class ExchangeRate {
  static async getRate(firstCurrency, secondCurrency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${secondCurrency}`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}