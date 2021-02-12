export default class CurrencyService {
  static async exchangeRate() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if(!response.ok) {
        throw Error(response);
      }
      console.log(response);
      return response.json();
    } catch(error) {
      return console.log(error);
    }
  }
}