// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  let teleNumber = "";
  let testValidation = true;
  const contadorRepetidor = contarRepeticao(arrayNumeros);

  if (arrayNumeros.length !== 11) {
    return "Array com tamanho incorreto.";
    testValidation = false;
  } else {
    for (let index = 0; index < arrayNumeros.length; index+=1) {
      
      if (arrayNumeros[index] < 0 || arrayNumeros[index] > 9 || contadorRepetidor ===true) {
        return "não é possível gerar um número de telefone com esses valores";
        testValidation = false;
      }
      
    }


  }
  if (testValidation === true) {
    for (let index = 0; index < arrayNumeros.length; index+=1) {
      if (index === 0) {
        teleNumber += "(" + arrayNumeros[index];
      } else if (index === 1) {
        teleNumber += arrayNumeros[index] + ") ";
      } else if (index < 7) {
        teleNumber += arrayNumeros[index];
      } else if (index === 7) {
        teleNumber += "-" + arrayNumeros[index];
      } else {
        teleNumber += arrayNumeros[index];
      }
          
    }
  }  

  return teleNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 3, 7, 8, 9, 0, 1]));

function contarRepeticao(arrayNumeros) {
  let contadorRepeticao = 0;
  let testeMaiorIgual3 = false;

  for (let index = 0; index < arrayNumeros.length; index+=1) {
    for (let index2 = 0; index2 < arrayNumeros.length; index2+=1) {
      if (arrayNumeros[index] === arrayNumeros[index2]) {
        contadorRepeticao +=1
      }      
    }

    if (contadorRepeticao >= 3) {
      testeMaiorIgual3 = true;
    }
    contadorRepeticao = 0;
    
  }

  return testeMaiorIgual3;
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let testValidation = false;
  if ((lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) && (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB))) {
    testValidation = true;
  }
  return testValidation;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
