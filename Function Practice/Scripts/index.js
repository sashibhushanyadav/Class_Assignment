let number = prompt("Enter The Number Between 1 to 100");
let num = Number(number);

function sumOfSeries(a) {
  document.write(
    "The sum of series number between 1 -100 is " + (a * (a + 1)) / 2
  );
}
sumOfSeries(num);
