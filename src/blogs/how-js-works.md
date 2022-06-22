![How JavaScript works](/images/blog/3-3.jpg)

###  How JavaScript works?

how JavaScript works?
<p>Everything in JavaScript happened inside an execution context.
execution context has 2 components .first component is known as the memory component in this component all the variables and functions are stored as key-value pairs. The memory component is also known as the variable environment. the second component of this execution context is the code component in this code component code are executed one line at a time .code component is also known as the thread of execution.</p>

<p>we know,
JavaScript is a synchronous single-threaded language which means in the thread execution context it executes one command at a time in a specific order .in short it can only go to the next line when the previous line is finished executed</p>

when someone runs a JavaScript code and the execution context is created. This execution context is created in two phases. The first phase is known as the memory creation phase. in this phase, JavaScript skims the whole program line by line and it allocates memory for the variable and functions as their name. the variable takes a special value undefined in the memory phase and the function value will be
the whole code that exists inside the function
the second phase is the code execution phase. in this phase JavaScript once again run the whole program line by line. this is the phase when every functionality, calculation, and program is done.
in this phase, all the variable's actual values are set in the memory component instead of undefined. when it finds any function in it there is nothing to execute
<p>when it sees any function is called it creates a new execution context.<p>


<p>and this execution context has 2 components. one is the Memory component and the second is the code component it also has two-phase one is the memory phase and another is the code execution phase . in this first phase allocates memory for the variables and parameters and sets the value of undefined.
then it goes to the code execution phase in this phase JavaScript runs the piece of code ( the code that contains that function ) line by line .then the new execution context’s memory component’s variable gets the actual value of the parameter and variables and if any calculation finds it will be done in code execution component after calculating it will be set to the variables instead of undefined. if a function returns anything then the function call will get the thing that the function is returned and it will be stored in the first created execution memory after getting the function call result .then the second execution which is created for the function call will be deleted and
the more you call a function in JavaScript it will a new execution context and go through the same way</p>

after completing all lines of JavaScript it will delete all the execution context