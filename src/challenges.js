// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true
  } else {
    return false
  }
}


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arrayPalavras = [];
  let positionLastSpace = 0;
  let palavra = "";

  for (let index = 0; index < frase.length; index+=1) {
    if (frase[index] === " " || index === frase.length - 1) {
      
      for (let index2 = positionLastSpace; index2 < index; index2+=1) {
        palavra += frase[index2];                
      }

      if (index === frase.length - 1) {
        palavra += frase[index];
      }

      arrayPalavras.push(palavra);
      palavra = "";
      positionLastSpace = index + 1;
    }
    
  }
  return arrayPalavras;
}


// Desafio 4
function concatName(arrayStrings) {
  let firstString = arrayStrings[0];
  let lastString = arrayStrings[arrayStrings.length - 1];

  return lastString + ", " + firstString;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
