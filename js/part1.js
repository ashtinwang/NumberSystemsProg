function ConversionPart1() {

  var UnsignedInt = document.getElementById("1_UnsignedInt").value;
  var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
  var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);


  var outputVal = "";
  var value = 0;
  var output = "";
  var intArr = UnsignedInt.split("");
  for (var c = 0; c < intArr.length; c++) {
    var temp = parseGuy(intArr[c]);
    value = (value * UnsignedIntBaseFrom) + temp;
  }
  output = value;
  //REPEAT
  //Value = (Value * N) + next digit
  //UNTIL(no digits remain);

  while (output != 0) {
    var temp2 = output % UnsignedIntBaseTo;
    if (UnsignedIntBaseTo > 10){
      temp2 = reverseParseGuy(temp2);
    }
    outputVal = temp2 + outputVal;
    output = Math.trunc(output / UnsignedIntBaseTo);
  }
  //Value := value to be converted;
  //REPEAT
  //Next digit of result := Value MOD N;
  //Value := Value DIV N;
  //UNTIL (Value = 0);


  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputVal], 1);

}

function parseGuy(expression) {
  switch (expression) {
    case "A":
      return 10;
      break;
    case "B":
      return 11;
      break;
    case "C":
      return 12;
      break;
    case "D":
      return 13;
      break;
    case "E":
      return 14;
      break;
    case "F":
      return 15;
      break;
    default:
      return parseInt(expression);
      break;

  }
}
function reverseParseGuy(expression) {
  switch (expression) {
    case 10:
      return "A";
      break;
    case 11:
      return "B";
      break;
    case 12:
      return "C";
      break;
    case 13:
      return "D";
      break;
    case 14:
      return "E";
      break;
    case 15:
      return "F";
      break;
    default:
      return parseInt(expression);
      break;
    }
}
