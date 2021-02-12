import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function getExchangeRate(dollar, forex) {
  let response = await ExchangeService.exchangeRate();
  const exchangeRate = (dollar * (response.conversion_rates[forex])).toFixed(2);
  if (isNaN(dollar)) {
    $("#result").text(`Please enter a valid USD amount`);
  } else if (isNaN(exchangeRate)) {
    $("#result").text(`Please enter a valid exchange currency`);
  } else {
    $("#result").text(`$${dollar} is worth ${exchangeRate} ${forex}`);
  }
}

function clearFields() {
  $("#dollar-amount").val("");
  $("#currency-convert").val("");
  $("#result").empty();
}

$(document).ready(function() {
  $("#exchange-form").submit(function(event) {
    event.preventDefault();
    let dollarAmount = parseInt($("#dollar-amount").val());
    let currencyConvert = $("#currency-convert").val();
    getExchangeRate(dollarAmount, currencyConvert);
    clearFields();
  });
  
}); 


