//local
const secret = 'SUPER SECRET'//we will not share this with the entire application

//global
const john = 'john'
const peter = 'peter'

//console.log(module);
//If we run this, we will see that there is an object(i.e. module object). In the object, we have a lot of properties and one of them is "exports"
//exports is also an object 
//The way in which CommonJS works is that whatever we put inside the exports, we will be able to access it anywhere in the application

module.exports = {john,peter}//i.e. we specify that we only want to share john & peter with the application
