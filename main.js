const message = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

function decompile(input) {
  let counter = 0;
  let numberArray = '';

  for (let i = 0; i < input.length; i++) {
    const symbol = input[i];

    if (symbol === '#') {
      counter += 1;
    } else if (symbol === '@') {
      counter -= 1;
    } else if (symbol === '*') {
      counter *= counter;
    } else if (symbol === '&') {
      numberArray += counter.toString();
    }
  }
  return "submit " + numberArray;
}
console.log(decompile(message));
    
