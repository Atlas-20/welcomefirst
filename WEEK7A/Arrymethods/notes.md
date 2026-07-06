?what is callback function ?/
=> A callback functionis a function that is passed as an argument to another function, and them excuted after some event or operation fineshes 

.The callback is called later by the function that receives it.
.It lets you run code after an asynchronous action or after a specific step.
.Common in JavaScript for events, timers, and array methods.

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

         //Argument vs Parameter
         They are closely related, but they are different:

        Parameter: a variable listed inside the function definition.
        Argument: the actual value passed to the function when it is called.
 
  so here => name and callback -parameter
         => alice and saygoodbye- argument