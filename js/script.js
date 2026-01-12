/*  
? Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

? BONUS

Facciamo accendi e spegni:

- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...

*/

// Seleziono gli elementi del DOM da manipolare
const lightLamp = document.getElementById("lamp");
const lightSwitch = document.getElementById("switch");
const resetSwitch = document.getElementById("repair");

console.log(lightLamp);
console.log(lightSwitch);

//! PRIMO APPROCCIO

// Dichiaro una variabile Booleana che verifica lo stato della lampadina
let lightOn = false;
let clickCounter = 0;
// Al click sullo switch verifica se la lampadina è accesa o spenta e gli cambia la sorgente dell'immagine e il testo del bottone

lightSwitch.addEventListener("click", function () {
  clickCounter++;

  if (clickCounter >= 5) {
    lightLamp.src = "../img/lamp_broken.png";
    lightSwitch.setAttribute("disabled", "");
    lightSwitch.innerText = "Lampadina Rotta";
    resetSwitch.classList = "btn btn-warning btn-lg";
  } else if (lightOn === false) {
    lightLamp.src = "../img/yellow_lamp.png";
    lightLamp.style = "translate: -17%;";
    lightSwitch.innerText = "Spegni";
    lightOn = true;
  } else {
    lightLamp.src = "../img/white_lamp.png";
    lightLamp.style = "translate: none;";
    lightSwitch.innerText = "Accendi";
    lightOn = false;
  }
});

resetSwitch.addEventListener("click", function () {
  clickCounter = 0;
  resetSwitch.classList = "d-none";
  lightLamp.src = "../img/white_lamp.png";
  lightLamp.style = "translate: none;";
  lightSwitch.innerText = "Accendi";
  lightSwitch.removeAttribute("disabled");
  lightOn = false;
});

//! SECONDO APPROCCIO
/* 
lightSwitch.addEventListener("click", function () {
  const lampOff = lightLamp.src.includes("white_lamp");
  if (lampOff === true) {
    lightLamp.src = "../img/yellow_lamp.png";
    lightLamp.style = "translate: -18%;";
    lightSwitch.innerText = "Spegni";
  } else {
    lightLamp.src = "../img/white_lamp.png";
    lightLamp.style = "translate: 0;";
    lightSwitch.innerText = "Accendi";
  }
}); 
*/
