/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch('cars.json')
  .then((response) => response.json())
  .then((data) => {
    const carsByManufacturer = groupBy(data, 'brand');

    const cards = Object.keys(carsByManufacturer).map((manufacturer) => {
      const models = carsByManufacturer[manufacturer]
        .map((car) => car.model)
        .join(', ');

      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h2');
      title.textContent = manufacturer;
      card.appendChild(title);

      const modelList = document.createElement('ul');
      models.split(',').forEach((model) => {
        const modelItem = document.createElement('li');
        modelItem.textContent = model.trim();
        modelList.appendChild(modelItem);
      });

      card.appendChild(modelList);

      return card;
    });

    const outputDiv = document.getElementById('output');
    cards.forEach((card) => outputDiv.appendChild(card));
  })
  .catch((error) => console.error(error));

function groupBy(list, key) {
  return list.reduce((groups, item) => {
    const group = groups[item[key]] || [];
    return { ...groups, [item[key]]: [...group, item] };
  }, {});
}
