import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange.js';

function getElement(response, firstCurrency, secondCurrency) {
  if (response.result === "success") {
    console.log(response.conversion_rate);
    $("#currencyOutput").text(`${firstCurrency} = ${response.conversion_rate * secondCurrency}`);
  } else {
    $("#error").text(`Sorry, there wasn an error: ${response}`);
  }
}

async function makeApiCall(firstCurrency, secondCurrency, usdAmount) {
  const response = await ExchangeRate.getRate(firstCurrency, secondCurrency);
  getElement(response, firstCurrency, secondCurrency, usdAmount);
}

$(document).ready(function () {
  $("#exchanger").click(function (e) {
    e.preventDefault();
    console.log("hello");
    let firstCurrency = parseInt($("#USD").val());
    console.log(firstCurrency);
    let secondCurrency = $("#foreignCurrency option:selected").val();
    makeApiCall(firstCurrency, secondCurrency);
  });
});