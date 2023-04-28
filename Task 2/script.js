/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var counter = 0;
const outputDiv = document.getElementById('btn__state');

document
  .getElementById('btn__element')
  .addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    counter += 1;
    outputDiv.innerHTML = counter;
  });
