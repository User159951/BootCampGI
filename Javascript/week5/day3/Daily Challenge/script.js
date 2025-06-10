
const API_KEY = "beb5fad86c82d68a4f95d98c";
const BASE_URL = "https://v6.exchangerate-api.com/v6/";


const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const converterForm = document.getElementById('converterForm');
const switchCurrenciesBtn = document.getElementById('switchCurrenciesBtn'); 

const statusMessage = document.getElementById('statusMessage');
const conversionResultDiv = document.getElementById('conversionResult');
const convertedAmountSpan = document.getElementById('convertedAmount');
const conversionRateSpan = document.getElementById('conversionRate');
const rateFromCodeSpan = document.getElementById('rateFromCode');
const rateToCodeSpan = document.getElementById('rateToCode');


function displayMessage(element, message, isError = false) {
    element.textContent = message;
    element.classList.remove('hidden');
    element.classList.toggle('error-text', isError);
}

function hideMessage(element) {
    element.classList.add('hidden');
}

function showConversionResult() {
    conversionResultDiv.classList.remove('hidden');
    hideMessage(statusMessage);
}

function hideConversionResult() {
    conversionResultDiv.classList.add('hidden');
}


async function fetchSupportedCurrencies() {
    displayMessage(statusMessage, 'Loading supported currencies...');
    hideConversionResult();

    try {
        const url = `${BASE_URL}${API_KEY}/codes`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.result === 'success' && data.supported_codes) {
            fromCurrencySelect.innerHTML = '';
            toCurrencySelect.innerHTML = '';

            data.supported_codes.forEach(codePair => {
                const currencyCode = codePair[0];
                const currencyName = codePair[1];
                const option = document.createElement('option');
                option.value = currencyCode;
                option.textContent = `${currencyCode} - ${currencyName}`;
                fromCurrencySelect.appendChild(option);
                toCurrencySelect.appendChild(option.cloneNode(true));
            });

        
            fromCurrencySelect.value = 'USD';
            toCurrencySelect.value = 'EUR';

            hideMessage(statusMessage); 
      
            convertCurrency();

        } else {
            throw new Error(`API Error: ${data['error-type'] || 'Failed to retrieve supported codes.'}`);
        }
    } catch (error) {
        console.error("Error fetching supported currencies:", error);
        displayMessage(statusMessage, `Error loading currencies: ${error.message}. Please try again.`, true);
    }
}

async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount) || amount <= 0) {
        displayMessage(statusMessage, 'Please enter a valid positive amount.', true);
        hideConversionResult();
        return;
    }
    if (!fromCurrency || !toCurrency) {
        displayMessage(statusMessage, 'Please select both "From" and "To" currencies.', true);
        hideConversionResult();
        return;
    }

    displayMessage(statusMessage, `Converting ${amount} ${fromCurrency} to ${toCurrency}...`);
    hideConversionResult();

    try {
        const url = `${BASE_URL}${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.result === 'success') {
            convertedAmountSpan.textContent = data.conversion_result.toFixed(2); 
            conversionRateSpan.textContent = data.conversion_rate.toFixed(4); 
            rateFromCodeSpan.textContent = fromCurrency;
            rateToCodeSpan.textContent = toCurrency;
            showConversionResult();
        } else {
            throw new Error(`API Error: ${data['error-type'] || 'Conversion failed.'}`);
        }
    } catch (error) {
        console.error("Error during currency conversion:", error);
        displayMessage(statusMessage, `Conversion failed: ${error.message}.`, true);
    }
}


function switchCurrencies() {
    const fromValue = fromCurrencySelect.value;
    const toValue = toCurrencySelect.value;

    fromCurrencySelect.value = toValue;
    toCurrencySelect.value = fromValue;

    convertCurrency(); 
}
converterForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    convertCurrency();
});

amountInput.addEventListener('input', convertCurrency);
fromCurrencySelect.addEventListener('change', convertCurrency);
toCurrencySelect.addEventListener('change', convertCurrency);

switchCurrenciesBtn.addEventListener('click', switchCurrencies);

document.addEventListener('DOMContentLoaded', fetchSupportedCurrencies);