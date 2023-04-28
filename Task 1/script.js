/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const weightInput = document.getElementById('search');
const outputDiv = document.getElementById('output');

document
  .getElementById('weight-form')
  .addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const kg = parseFloat(weightInput.value);
    const lb = kg * 2.2046;
    const g = kg / 0.001;
    const oz = kg * 35.274;
    outputDiv.innerHTML = `<p>${kg} kg is:</p>
                               <ul>
                                 <li>${lb.toFixed(2)} lb</li>
                                 <li>${g.toFixed(2)} g</li>
                                 <li>${oz.toFixed(2)} oz</li>
                               </ul>`;
  });
