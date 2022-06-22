![what is javascript hosting and how it works](/images/blog/4.png)

### what is javascript hosting and how it works

***Hoisting*** is a ***JavaScript*** mechanism where variables and function declarations are moved to the top of their scope before code execution.



![code1.png](https://i.ibb.co/xSNPSwc/code1.png)

suppose you have a variable which name is IamVar and you have a function which name is IamFun.

do you know? what will happened if you call them before declaration . you may say the result will be undefined for all but as JavaScript is wonderful language it will wonder you 

![Screenshot (166).png](https://i.ibb.co/D9GxxnV/Screenshot-166.png)

you can see that for the variable it will give you undefined but for function it will give you the result but the question arise how it is possible ?

to know the answer you have to know about  [execution context](https://mynulislam.netlify.app/blogs/blog-details/3/how-js-works)  . Here I will give  you a short brief,

when we run a JavaScript code JavaScript a execution context will be create . execution context have two part one is memory component and another is code component. it will run in two phase one is memory creation another is code execution. in memory creation phase JavaScript skim the whole code and  allocate the memory as their name .in this phase variable value will be special value undefined but for the function it will take the whole code which exist inside the function 

now get back to the hoisting .  when we run the code  it will create an execution context ,

in memory phase it will allocate memory for the variable and function .

but for the variable it will set a special value undefined

![Screenshot (167).png](https://i.ibb.co/nbp5bsg/Screenshot-167.png)

 and for the function it will take the whole code which is exist inside the function (this is the twist) .

![Screenshot (170).png](https://i.ibb.co/g7w2Ss8/Screenshot-170.png)

after that when code execution phase start JavaScript memory component have undefined value  for the variable  which you use before declaration. so that the result you get it will be undefined  on the other hand function  will find the code, so that it will execute how you are trying to get.

### Note: if you use  function syntax like this

![code2.png](https://i.ibb.co/5xjJKXc/code2.png)

![code3.png](https://i.ibb.co/br41Nfj/code3.png)

### it will give you error because in this case function are behave like variable.

Note: const and let doesn’t allow hoisting . 

and if you use any keyword from let var const for the function declaraion and call the function before declaration answer will be the same asnwer