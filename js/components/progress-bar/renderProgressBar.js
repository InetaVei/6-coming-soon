import { isValidInput } from './isValidInput.js';
import { isValidProgressBar} from './isValidProgressBar.js';

function renderProgressBar(selector, data) {   // validacija
// input validation
    if (!isValidInput(selector,data)) {
        return false;
    }

    //randame vieta kur reikes padeti turini             // returnas
    const DOM = document.querySelector(selector);
     if (!DOM) {
         return false;
     }

//generuojame turini                          // logika
     let HTML = '';
     for (let i = 0; i < data.length; i++) {
         const bar = data[i];
         if (!isValidProgressBar(bar)) {
             continue;
         }

     HTML += `<div class="progress-bar">
     <div class="top">
         <div class="label">${bar.title}</div>
         <div class="value">${bar.value}%</div>
     </div>
     <div class="bottom">
         <div class="progress" style="width: ${bar.value}%;">
             <div class="bar"></div>
         </div>
     </div>
        </div>`;
}         
// post logic validation                          // logikos validacija  
if (HTML === '') {
    return false;
}

    DOM.innerHTML += HTML;
     return true;
}

export { renderProgressBar }