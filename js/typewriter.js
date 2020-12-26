// the input of string is 'charAt' function
// the display of cursor is achieved by creating one and then destroy it
var charIndex = -1;
var stringLength = 0;
var inputText;

function writeContent(init) {
  if (init) {
    inputText = document.getElementById('contentToWrite').innerHTML;
  }
  if (charIndex == -1) {
    charIndex = 0;
    stringLength = inputText.length;
  }
  var initString = document.getElementById('myContent').innerHTML;
  initString = initString.replace(/<SPAN.*$/gi, "");
  console.log(initString)
  var theChar = inputText.charAt(charIndex);
  var nextFourChars = inputText.substr(charIndex, 4);
  if (nextFourChars == '<br>') {
    theChar = '<br/>';
    charIndex += 12;
  }
  //define string to be inputed
  initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
  //input string
  document.getElementById('myContent').innerHTML = initString;
  charIndex = charIndex / 1 + 1;
  if (charIndex % 2 == 1) {
    document.getElementById('blink').style.display = 'none';
  } else {
    document.getElementById('blink').style.display = 'inline';
  }
  if (charIndex <= stringLength) {
    setTimeout('writeContent(false)', 140);
  } else {
    document.getElementById('blink').style.display = 'none';
  }
}