//Modules
//Why do we need modules?
//Till now we are only executing [node app.js]. So, does that mean if all our application be in one file? A - Yes & No
//For our application, we will only execute one file but we will split our code in modules else it will be very difficult to have/manage all our code in one file.
//We will show this with a Complex App below:

const john = 'john'
const peter = 'peter'

const sayHi = (name)=>{
    console.log(`Hello there ${name}`)
//Here we can only use `` and not '' or "" as it doesn't work for $ 
}

sayHi('susan')
sayHi(john)
sayHi(peter)


//Now, it will make more sense if the names would be separate and the function or any future functions to be created would be in separate files and then we can access them all throught the application. Thus, we will have smaller files and more structure to our applications. Thats what modules allow us to do.
//So, Modules is Encapsulated Code (i.e. only share the minimum)
//If we need to have any secret variable(which we donot want anyone else to access or change) then that variable will have to be defined in a separate module, so that the above file doesn't have access to it.
//If the secret variable is defined in the above file, then it can be accessed anywhere.

//Node uses CommonJS library under the hood.
//**Every file in Node is a module (by default)

//Now, all the names will be placed inside names.js
//The function will be moved to utils.js
//Now, will the app still work or break? It will break as there is no access to call the function (sayHi())
//Here 'module.exports' and 'require' come into picture explained in 4-first_module.js & 5-names.js
