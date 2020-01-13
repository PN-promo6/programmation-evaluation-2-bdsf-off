
function display(array){


let i=0;
let currentElement;
let fishElement

while (i< array.length) {
 currentElement=array[i];

 let fishElement = document.createElement("table");
 document.body.appendChild(fishElement);

fishElement.textContent=currentElement;
fishElement.style.display="inline-block";
fishElement.style.marginRight= "5px";
i++;
}

}




let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conder conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

display(fishList)
