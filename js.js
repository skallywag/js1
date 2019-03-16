//______________STRINGS AND VARIABLES_______________

// var name = "jono" //string are in quotes
var num = 8 // variables can be numbers, strings, arrays, objects
// // numbers are values, strings will be whatever the string is

// console.log('my name is ' + name + ' and im ' + num)
// console.log(`my name is ${name} and im ${num}`) //ES6 (newer javascript) template literal


var name = `sam`
var birth = `8-14-1995`
var age = 26 //numbers can be strings or values

// create a variable for your age and birthday. then create a TEMPLATE LITERAL saying "my name is sam, im 26 and my birthday is 8-14-1992"
console.log(`my name is ${name}, im ${age} and my birthday is ${birth}`)

//_________________________________________________
//----------- ARRAYS -------------

var array = []
var fruits = ['apple', "orange", "pineapple", "grapefruit"]

// An array stores strings, objects, values, and arrays

var array = [] //arrays are always stored in the box []
var fruits = ['apple', "orange", "pineapple", "grapefruit"]
//arrays are indexed starting at 0 

fruits.length 
var names = [`sam`, `kevin`, `caleb` , `dickhead`]
var dog = `otis`
console.log(`my name is ${names[0]} my favorite fruit is ${fruits[1]} my dog is ${dog}
`)

//_________________________________________________
//----------- Objects -------------

// objects are a collection of PROPERTIES with key VALUES 

// var luke = {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "unknown",
// }

// luke['name'] //Bracket notation
// luke.gender.notation


// var myCar = new Object();
// myCar.make = `ford`
// myCar.color = 'green'
// myCar.horsepower = '400'
// console.log(`my cars horsepower is around ${myCar.horsepower}`)

// myCar
// var myCar

// var dog = {
//  name : "otis",
//  age : "4",
//  breed : "yorkshire",
// }

// dog.name
// 
function Car(make, model, year) {
    Car.make = make;
    this.model = model;
    this.year = year;
  }
  
  var mustang = new Car("ford", "mustang", "95")
  mustang
  
  var subaru =new Car("subaru", "wrx", "06")
  subaru
