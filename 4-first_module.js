//In order to access the names, we need to use require and we can assign it to a variable or simply require.
const names = require('./5-names')//Here require is our function and in the parameter we need to pass in where the module is located
//Always, we have to start our module with './'as our file is one leve up Project Folder. If it is two levels up, we use '../'
const sayHi = require('./6-utils')

//console.log(names);
//If we run this we get an object with values john and peter

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
//sayHi(john)
//sayHi(peter)
//If we use sayHi(john), console throws error that john is not defined. John is inside the names. 
//So, either we will destructure it i.e. instead of names we will write {john,peter} or we will go with property name i.e replace john with names.john
