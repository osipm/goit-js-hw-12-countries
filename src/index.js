import fetchCountries from './fetchCountries';
import card from './card.hbs';
import debounce from 'lodash.debounce';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import list from './list.hbs'

const dropdown = document.querySelector('.dropdown')


const input = document.querySelector('#input');
input.addEventListener('input', debounce(onSearchСountry, 500));

function onSearchСountry({target:{value}}) {
    if(!value){return}
    fetchCountries(value).then((response) => {
     
      if (response.length === 1) {
        dropdown.innerHTML = card(response[0]);
      } else if (response.length < 11) {
        dropdown.innerHTML = list({ response });
      } else {
        alert({
          text: 'ведіть більше даних'
        });
      }
    })
      .catch(function(){
        alert({
          text: 'некоректно введені дані, або країни незнайдено'
        });
      })


}


