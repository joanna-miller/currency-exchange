import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function getExchangeRates() {
  const response = await ExchangeService.exchangeRate();
  return response;
}



$(document).ready(function() {
  getExchangeRates();
  $("#exchange-form").submit(function(event) {
    event.preventDefault();
    let dollarAmount = parseInt($("#dollar-amount").val());
    let currencyConvert = $("#currency-convert").val();
    console.log(dollarAmount);
    console.log(currencyConvert);
    console.log(response.conversion_rates.EUR);
  })
});


