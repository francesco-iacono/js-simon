// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve insbersre, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

$(document).ready(
  function () {
    // Un alert espone 5 numeri casuali diversi.
    var numberAlert = [];

    while (numberAlert.length < 5) {
    // genera numeri casuali (bomb) casuali
      var number = numbersRandom(1, 100);
      // I numeri non possono essere duplicati.
      var elementPresent = checkDouble(number, numberAlert);
      if (elementPresent == false) {
        numberAlert.push(number);
      }
    }
    alert(numberAlert);
    console.log(numberAlert);
   // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
   var remember = setTimeout(
     function () {
       var userArray = [];

       var i = 0;
       while ( i < 5) {
         var userNumber = parseInt(prompt('Inserisci uno alla volta i numeri che hai visto'));
         var checkNumbers = checkDouble(userNumber, numberAlert);
         if (checkNumbers == true) {
           userArray.push(userNumber);
         }
       i++;
     }
     // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
     console.log('Numeri ricordati : ', userArray.length);
     console.log('Ecco quali sono ', userArray);
     clearInterval(remember)
   }, 3000);
  }
);


// FUNZIONI-----------------------------------------------------
function numbersRandom(min, max) {
        var risultato = Math.floor(Math.random() * (max - min + 1) + min);
        return risultato;
}

function checkDouble(elemento, array) {
      var risultato = false;
      for (var i = 0; i < array.length; i++) {
        if (elemento == array[i]) {
            risultato = true;
        }
      }
      return risultato;
}
