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
  var input = floatNum;
  while (input != 0) {
    var temp = input % 2;
    output = temp + output;
    input = Math.trunc(input / 2);
  }

  //Binary Conversion Decimal
  var output2 = "";
  var input2 = output;
  while (input2 != 0) {
    input2 = input2 * 2;
    output2 += Math.trunc(input2);
    input2 = input2 % 1;
  }

  //Mantissa Maker
  mantissa += output;
  var decArr = output2.split("");
  while (mantissa.length < 23) {
    for (var c = 0; c < decArr.length; c++) {
      mantissa += decArr[c];
    }
  }

  //

  //Value := fraction to be converted;
  //REPEAT Value := Value * N;
  //Next digit of result := integer part of Value;
  //Value := fractional part of Value;
  //UNTIL (Value = 0) or (the desired number of digits are produced);




  var output32BitScientificNotation = "10100011001100001000010100101010";

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
//
