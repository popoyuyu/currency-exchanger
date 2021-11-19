import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange.js';

function getElement(response, firstCurrency, secondCurrency, usdAmount) {
  if (response.result === "success") {
    console.log(response);
    $("#currencyOutput").text(`&dollar;${usdAmount} ${firstCurrency} = ${response.conversion_rate * secondCurrency}`);
  } else {
    $("#error").text(`Sorry, there wasn an error: ${response}`);
  }
}

async function makeApiCall(firstCurrency, secondCurrency) {
  const response = await ExchangeRate.getRate(firstCurrency, secondCurrency);
  getElement(response, firstCurrency, secondCurrency);
}

$(document).ready(function () {
  $("#exchanger").on("click", function (e) {
    e.preventDefault();
    console.log("hello");
    let firstCurrency = parseInt($("#USD").val());
    let secondCurrency = $("#foreignCurrency option:selected").val();
    makeApiCall(firstCurrency, secondCurrency);
  });
});