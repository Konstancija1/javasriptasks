/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const showUsersBtn = document.querySelector('#btn');
const outputDiv = document.querySelector('#output');

function userAction() {
  const message = document.querySelector('#message');
  message.style.display = 'none';
  fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const avatarImg = document.createElement('img');
        avatarImg.src = user.avatar_url;
        avatarImg.alt = `${user.login}'s avatar`;

        const loginP = document.createElement('p');
        loginP.textContent = user.login;

        cardDiv.appendChild(avatarImg);
        cardDiv.appendChild(loginP);
        outputDiv.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error.message}`;
    });
}
