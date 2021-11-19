import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange.js';

function getElement(response, firstCurrency, secondCurrency) {
  if (response.result === "success") {

  }

}

async function makeApiCall(firstCurrency, secondCurrency) {
  const response = await ExchangeRate.getConversion(firstCurrency, secondCurrency);
  getElements(response, firstCurrency, secondCurrency);
}