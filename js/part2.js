function ConversionPart2() {
  //
  var SignedDecimalInt = document.getElementById("2_SignedInt").value;

  //outputs in binary because the example showed
  //hex conversion can be done by part 1 so I'm following the example rather than the hub

  var negative = false;
  if (SignedDecimalInt.charAt(0) == "-") {
    negative = true;
  }

  if (negative) {
    var unsigned = parseInt(SignedDecimalInt.substring(1));
  } else {
    unsigned = parseInt(SignedDecimalInt);
  }
  var outputVal = "";
  while (unsigned != 0) {
    var temp = unsigned % 2;
    outputVal = temp + outputVal;
    unsigned = Math.trunc(unsigned / 2);
  }
  while (outputVal.length < 32) {
    outputVal = 0 + outputVal;
  }



  var intArr = outputVal.split("");
  var outputVal2 = "";
  for (var c = 0; c < intArr.length; c++) {
    if (intArr[c] == 0) {
      intArr[c] = 1;
    } else if (intArr[c] == 1) {
      intArr[c] = 0;
    }
    outputVal2 += intArr[c];
  }


  var outputVal3 = "";
  var z = intArr.length - 1;
  var carry = false;

  if (intArr[intArr.length - 1] == 0) {
    intArr[intArr.length - 1] = 1;
    for (var i = intArr.length - 1; i >= 0; i--) {
      outputVal3 = intArr[i] + outputVal3;
    }
    if (negative){
      FormatAndShowOutput([outputVal3, outputVal, SignedDecimalInt], 2);
    }
      else{
        FormatAndShowOutput([outputVal, outputVal3, SignedDecimalInt], 2);
      }
  } else if (intArr[z] == 1) {
    carry = true;
    intArr[z] = 0;
    z--;
    while (carry == true) {
      if (intArr[z] == 0) {
        intArr[z] = 1;
        carry = false;
      } else if (intArr[z] == 1) {
        intArr[i] = 0;
      }
    }
    for (var q = intArr.length - 1; q >= 0; q--) {
      outputVal3 = intArr[q] + outputVal3;
    }
    if (negative){
      FormatAndShowOutput([outputVal3, outputVal, SignedDecimalInt], 2);
    }
      else{
        FormatAndShowOutput([outputVal, outputVal3, SignedDecimalInt], 2);
      }
  }




  // Show the output on the screen
  //FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
