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
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumeros) {  
  let maiorNumber = arrayNumeros[0];
  let contador = 0;

  for (let index = 0; index < arrayNumeros.length; index+=1) {
    if (arrayNumeros[index] > maiorNumber) {
      maiorNumber = arrayNumeros[index];
    }    
  }

  for (let index = 0; index < arrayNumeros.length; index+=1) {
    if (arrayNumeros[index] === maiorNumber) {
      contador +=1;
    }
  }

  return contador;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  let distanceToCat1 = 0;
  let distanceToCat2 = 0;

  if (positionMouse > positionCat1) {
    distanceToCat1 = positionMouse - positionCat1;
  } else {
    distanceToCat1 = positionCat1 - positionMouse;
  }

  if (positionMouse > positionCat2) {
    distanceToCat2 = positionMouse - positionCat2;
  } else {
    distanceToCat2 = positionCat2 - positionMouse;
  }

  if (distanceToCat1 < distanceToCat2) {
    return "cat1";
  } else if (distanceToCat2 < distanceToCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }

}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayStrings = [];

  for (let index = 0; index < arrayNumeros.length; index+=1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 !==0) {
      arrayStrings.push("fizz");
    } else if (arrayNumeros[index] % 5 === 0 && arrayNumeros[index] % 3 !== 0) {
      arrayStrings.push("buzz");
    } else if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      arrayStrings.push("fizzBuzz");
    } else {
      arrayStrings.push("bug!");
    }    
  }

  return arrayStrings;
}

// Desafio 9
function encode(string) {
  let stringCodificada = "";

  for (let index = 0; index < string.length; index+=1) {
    if (string[index] === "a") {
      stringCodificada += 1;
    } else if (string[index] === "e") {
      stringCodificada += 2;
      
    } else if (string[index] === "i") {
      stringCodificada += 3;
      
    } else if (string[index] === "o") {
      stringCodificada += 4;
      
    } else if (string[index] === "u") {
      stringCodificada += 5;
      
    } else {
      stringCodificada += string[index];
    }
    
  }

  return stringCodificada;
}

function decode(string) {
  let stringDecodificada = "";
  
  for (const key in string) {
    if (string[key] === "1") {
      stringDecodificada += "a";
    } else if (string[key] === "2") {
      stringDecodificada += "e";
      
    } else if (string[key] === "3") {
      stringDecodificada += "i";
      
    } else if (string[key] === "4") {
      stringDecodificada += "o";
      
    } else if (string[key] === "5") {
      stringDecodificada += "u";
      
    } else {
      stringDecodificada += string[key];
    }    
  }

  return stringDecodificada;
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
