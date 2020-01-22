function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

  var floatDec = floatToConvert % 1;
  var floatNum = Math.trunc(floatToConvert);
  var mantissa = "";
  var negative = false;
  if (floatToConvert < 0) {
    negative = true;
  }
  //Binary Conversion Whole
  var output = "";
  var input = Math.abs(floatNum);
  while (input != 0) {
    var temp = input % 2;
    output = temp + output;
    input = Math.trunc(input / 2);
  }

  //Binary Conversion Decimal
  var output2 = "";
  var input2 = Math.abs(floatDec);
  while (input2 != 0 && output2.length<22) {
    input2 = input2 * 2;
    output2 += Math.trunc(input2);
    input2 = input2 % 1;
  }

  //Mantissa Maker
  mantissa += output.substring(1);
  var decArr = output2.split("");
  while (mantissa.length < 22) {
    for (var c = 0; c < decArr.length; c++) {
      mantissa += decArr[c];
    }
    if (mantissa.length == 22) {
      mantissa = 1 + mantissa;
    }
    if (mantissa.length != 23) {
      mantissa = mantissa + 0;
    }
  }
//The hub says to prepend implicit 1 so I did, despite the fact that it is implicit
//I followed instructions


  //Exponent
  var exponent = 0;
  if (parseInt(output) != 0) {
    exponent = output.length - 1;
  } else {
    var i = 0;
    while (output2.charAt(i) != 0) {
      i++;
    }
    exponent = -i - 1;
  }
  exponent += 128;
  if (exponent < 0) {
    var negExponent = true;
    exponent = Math.abs(exponent);
  }
  var outputEx = "";
  while (exponent != 0) {
    var temp2 = exponent % 2;
    outputEx = temp2 + outputEx;
    exponent = Math.trunc(exponent / 2);
  }
  if (negExponent == true) {
    var intArr = outputEx.split("");
    var output3 = "";
    for (var c = 0; c < intArr.length; c++) {
      if (intArr[c] == 0) {
        intArr[c] = 1;
      } else if (intArr[c] == 1) {
        intArr[c] = 0;
      }
      output3 += intArr[c];
    }

    var z = intArr.length - 1;
    var carry = false;
    var intArr2 = output3.split("");
    var outputVal3 = "";
    if (intArr2[z] == 0) {
      intArr2[z] = 1;
      for (var i = z; i >= 0; i--) {
        outputVal3 = intArr2[i] + outputVal3;
      }
    } else if (intArr2[z] == 1) {
      carry = true;
      intArr2[z] = 0;
      z--;
      while (carry == true) {
        if (intArr2[z] == 0) {
          intArr2[z] = 1;
          carry = false;
        } else if (intArr2[z] == 1) {
          intArr2[i] = 0;
        }
      }
      for (var q = z; q >= 0; q--) {
        outputVal3 = intArr2[q] + outputVal3;
      }
    }
  }
  var isNeg = 0;
  if (negative == true) {
    isNeg = 1;
  }

if (negExponent == true){
  var output32BitScientificNotation = mantissa + outputVal3 + isNeg;
}
else{
  var output32BitScientificNotation = mantissa + outputEx + isNeg;
}

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}



// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
//11010001100110000100001100101010
//11010001100110000100001100101010
//11010001100110000100001100101010
//11010001100110000100001100101011

//Value := fraction to be converted;
//REPEAT Value := Value * N;
//Next digit of result := integer part of Value;
//Value := fractional part of Value;
//UNTIL (Value = 0) or (the desired number of digits are produced);
