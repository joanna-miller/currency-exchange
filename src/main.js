import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from "./js/exchange-service.js";

async function createList() {
  let response = await ExchangeService.exchangeRate();
  let currenciesArray = Object.keys(response.conversion_rates);
  currenciesArray.forEach(function(currency) {
    $("#currency-list").append(`<li>${currency}</li>`);
  });
  $("li").bind("click", function() {
    $("#currency-convert").val(($(this).text()))
  });
}

async function getExchangeRate(dollar, forex) {
  let response = await ExchangeService.exchangeRate();
  if (response.result === "success") {
    const exchangeRate = (dollar * (response.conversion_rates[forex])).toFixed(2);
    if (isNaN(dollar)) {
      $("#result").text(`Please enter a valid USD amount`);
    } else if (isNaN(exchangeRate)) {
      $("#result").text(`Please enter a valid exchange currency`);
    } else {
      $("#result").text(`$${dollar} is worth ${exchangeRate} ${forex}`);
    }
  } else {
    $("#result").text(`Sorry! ${response}`);
  }
}

function clearFields() {
  $("#dollar-amount").val("");
  $("#currency-convert").val("");
  $("#result").empty();
}

$(document).ready(function() {
  createList();
  $("#exchange-form").submit(function(event) {
    event.preventDefault();
    let dollarAmount = parseInt($("#dollar-amount").val());
    let currencyConvert = $("#currency-convert").val();
    getExchangeRate(dollarAmount, currencyConvert);
    clearFields();
  });
}); 


