//In VanillaJS, we have access to the window object where we can get to do many cool things. Eg: we can get a query selector, so we can select a node, we can get built-in fetch.
//In Node, there is no window because there is no browser, so there is no window object. If we try to access window, node will throw the error and our app might also crash.

// There is a concept of global variables i.e. these variables can be accessed anywhere in our application. No matter how complex our application gets or how nested it gets we will always have access to those variables.
//GLOBALS - NO WINDOW !!!!

//Some useful Global Variables mentioned below :
//__dirname - it gives path to current directory
//__filename - it gives file name
//require - it is a function to use modules (CommonJS) 
//module - info about current module (file)
//process - (V.V.Useful) it gives info about the env(environment) where the program is being executed
//In a node app, the code is executed on our machine but when we deploy for eg an API in your server, it might be sitting on Digital Ocean or Heroku etc. So, that is a different environment and based on that environment we make certain decisions in our application
//console - used to print log in console i.e. console.log
//setInterval
//setTimeout


console.log(__dirname);
//You may also try and explore to console the above other global variables

setInterval(()=>{
    console.log("Hello World!");
},1000)