/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = (a, b) => a + b;
  this.subtraction = function (a, b) {
    return a - b;
  };
  this.multiplication = function (a, b) {
    return a * b;
  };
  this.division = function (a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero!');
    }
    return a / b;
  };
}
var myCalculator = new Calculator();
var sumResult = myCalculator.sum(2, 3);
var subResult = myCalculator.subtraction(5, 2);
var mulResult = myCalculator.multiplication(3, 4);
var divResult = myCalculator.division(10, 2);
