const listaDellaSpesa  = [
    "pane",
    "acqua",
    "pasta",
    "uova",
    "carne",
];
const contenitore = document.body;  

let i = 0;
    while(i < listaDellaSpesa.length) {
        const element = listaDellaSpesa[i];
        console.log(element);
        const elementHTML = document.createElement("p");
        elementHTML.inner = element;
        contenitore.append(elementHTML);
        i++;
    }