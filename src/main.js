import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function getExchangeRate(forex) {
  let response = await ExchangeService.exchangeRate();
  const exchangeRate = (response.conversion_rates[forex]);
  console.log(exchangeRate);
}

function clearFields() {
  $("#dollar-amount").val("");
  $("#currency-convert").val("");
}

$(document).ready(function() {
  $("#exchange-form").submit(function(event) {
    event.preventDefault();
    let dollarAmount = parseInt($("#dollar-amount").val());
    let currencyConvert = $("#currency-convert").val();
    console.log(dollarAmount);
    console.log(currencyConvert);
    getExchangeRate(currencyConvert);
    clearFields();
  });
  
}); 


