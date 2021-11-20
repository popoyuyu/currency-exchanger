import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange.js';

function getElement(response, firstCurrency, secondCurrency) {
  if (response.result === "success") {
    const finalConversion = (response.conversion_rate * firstCurrency).toFixed(2);
    $("#currencyOutput").text(`$${firstCurrency} USD = ${finalConversion}${secondCurrency}`);
  } else {
    $("#error").text(`Sorry, there was an error: ${response}`);
  }
}

async function makeApiCall(firstCurrency, secondCurrency) {
  const response = await ExchangeRate.getRate(firstCurrency, secondCurrency);
  getElement(response, firstCurrency, secondCurrency);
}

$(document).ready(function () {
  $("#exchanger").submit(function (e) {
    e.preventDefault();
    let firstCurrency = $("#USD").val();
    console.log(firstCurrency);
    let secondCurrency = $("#foreignCurrency option:selected").val();
    console.log(secondCurrency);
    makeApiCall(firstCurrency, secondCurrency);
  });
});