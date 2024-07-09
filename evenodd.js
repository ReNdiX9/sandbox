function evenOrOdd() {
  //get input number
  let number = document.getElementsByName("number")[0].value;
  console.log(number, typeof number);
  //check using % if number is even or odd
  if (number % 2 === 0) {
    console.log("even");
    isNumber = true;
    document.getElementById("resultTxt").innerHTML = "<h3>even</h3>";
  } else if (number % 2 === 1) {
    console.log("odd");
    isNumber = true;
    document.getElementById("resultTxt").innerHTML = "<h3>odd</h3>";
  } else {
    console.log("Invalid");
    isNumber = true;
    document.getElementById("resultTxt").innerHTML = "<h3>Invalid</h3>";
  }
  //ternary operator(short statements only)
  if (isNumber) {
    let result = number % 2 === 0 ? "even" : "odd";
    document.write("ternary," + result);
    document.getElementsByName("resultTxt").innerHTML = `ternary ${result}`;
  }
}
function resetTxt() {
  //remove result text
  document.getElementById("resultTxt").innerHTML = "";
}
