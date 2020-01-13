// 2.3

function display(array){


let paragraphe;
let i=0;
let currentElement;

while (i< array.length) {
 currentElement=array[i];
paragraphe=  document.createElement("p");
document.body.appendChild(paragraphe);
paragraphe.textContent=currentElement;
paragraphe.style.display="inline-block";
paragraphe.style.marginRight= "5px";
i++;
}

}






// 2.2 CREATION OF THE TWO-DIMENSION TABLE //

let arrayInfosMovies = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DESIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

display(arrayInfosMovies)


// 2.4 HIDE AND SHOW ELEMENTS

let containerScreen1 = document.getElementById("screen1");


toggle1.addEventListener("click", function () {
  containerScreen1.style.display = "block";
  arrayInfosMovies.style.display = "none";
})
