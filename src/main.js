import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function getExchangeRate(forex, dollar) {
  let response = await ExchangeService.exchangeRate();
  console.log(dollar);
  console.log(forex);
  console.log(response.conversion_rates.forex);
  
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
    getExchangeRate(currencyConvert, dollarAmount);
    clearFields();
  })
  
});


