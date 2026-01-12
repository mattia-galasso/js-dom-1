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

console.log(lightLamp);
console.log(lightSwitch);

// Dichiaro una variabile Booleana che verifica lo stato della lampadina
let lightOn = false;

// Al click sullo switch verifica se la lampadina è accesa o spenta e gli cambia la sorgente dell'immagine e il testo del bottone
