import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function getExchangeRate(forex) {
  const response = await ExchangeService.exchangeRate();
  console.log(response.conversion_rates.forex);
}


$(document).ready(function() {
  
  $("#exchange-form").submit(function(event) {
    event.preventDefault();
    let dollarAmount = parseInt($("#dollar-amount").val());
    let currencyConvert = $("#currency-convert").val();
    console.log(currencyConvert);
    console.log(dollarAmount);
    getExchangeRate(currencyConvert);
  })
  
});


