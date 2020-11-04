import "./css/main.css";
import fetchCountries from "./fetchCountries"
import country from "./templates/country.hbs"
import list from "./templates/list.hbs"
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

let debounce = require('lodash.debounce');

const rest = {
    box: document.querySelector('.js-box'),
    searchForm: document.querySelector('.js-input')
}

rest.searchForm.addEventListener('input', debounce(countrySearch, 500))


function countrySearch(e) {
    const searchQuery = e.target.value;
    rest.box.textContent = ''

    fetchCountries(searchQuery)
        .then(data => {
            if (data.length > 10) {
                errorMessage('To many matches found. Please enter a more specific query!')
            }
            else if (data.length > 1 && data.length <= 10) {
                foundMarkup(list({ ...data }))
            }
            else if (data.length === 1) {
                foundMarkup(country(...data))
            }
        })
}

function foundMarkup(array) {
    rest.box.insertAdjacentHTML('beforeend', array)
}

function errorMessage (message) {
    error({
        text: `${message}`,
        delay: 1000,
        closerHover: true,
    });
}