# What is Node JS ?

NodeJS is an environment to run Javascript outside the Browser. Created in 2009.

Built on Chrome's V8 JS Engine (every browser has an engine i.e. It is a program/tool that converts Javascript code into lower level or machine code that microprocessors can understand. Refer [https://www.freecodecamp.org/news/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964/#:~:text=So%20what%20actually%20is%20a,engines%20follow%20the%20ECMAScript%20Standards.]

Node JS has a very large Community.It is very easy to build Full Stack Applications with the help of NodeJS since both frontend & backend are build on the same language i.e. JS.

Refer Youtube Channel 'Coding Addict' and Playlist 'JS Nuggets' if you need to brush up JS fundamentals.

#Difference b/w BrowserJS and NodeJS:
1) When working on NodeJS apps, we have no access to browser APIs they don't exist in Node, there is no browser. So there is no DOM, no Geolocation, no Fetch and other Browser goodies. On the other side, Browser apps are interactive, eg: user clicks a button or toggles the nav.
2) With Node we build server side apps (Node apps will only consist of pure logic without the graphical interface). In browser we use window object but it is also not available in Node.
3) Unlike browser, In Node we can access File System, info about Operating System, respond to Network Requests.
4) Node is based on versions. So unlike browser which depends on user's browser, our node app depends only on nodeJS version it was built in. If we build a browser and our user's browser does not support a specific feature then it is our responsibility to fix it otherwise our app might have bugs. When we build our Node app there is no rule that we have to upgrade to a newer NodeJS version.
5) In browsers, modules r optional. In node, we have access to modules by default (NodeJS uses CommonJS library for the modules).

# How does Node evaluate our code ?
There are 2 ways, a REPL(read evaluation print loop) which is just for playing around with code(executing code one line at a time) and CLI(command line interface) executable which means running our app code in Node which is used for serious applications.

Running Repl in Terminal: 
node //here we have node+space, then enter, we get > sign which means we are in the repl

const name = "john"
name
'john'//Now, this is printed by repl and not us

We can do the same in VanillaJS in browser console. To close the repl we use Ctrl+C

We will get to know How Node evaluates our serious application code using CLI in the next Files.........
