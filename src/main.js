import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function getExchangeRates() {
  const response = await ExchangeService.exchangeRate();
  console.log(response.conversion_rates);
}

$(document).ready(function() {
  getExchangeRates();
});


