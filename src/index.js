import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange.js';

function getElement(response, firstCurrency, secondCurrency) {
  if (response.result === "success") {
    $("#currencyOutput").text(`$${firstCurrency} USD = ${response.conversion_rate * firstCurrency}${secondCurrency}`);
  } else {
    $("#error").text(`Sorry, there was an error: ${response}`);
  }
}

async function makeApiCall(firstCurrency, secondCurrency) {
  const response = await ExchangeRate.getRate(firstCurrency, secondCurrency);
  getElement(response, firstCurrency, secondCurrency);
}

$(document).ready(function () {
  $("#exchanger").click(function (e) {
    e.preventDefault();
    console.log("hello");
    let firstCurrency = $("#USD").val();
    console.log(firstCurrency);
    let secondCurrency = $("#foreignCurrency option:selected").val();
    console.log(secondCurrency);
    makeApiCall(firstCurrency, secondCurrency);
  });
});