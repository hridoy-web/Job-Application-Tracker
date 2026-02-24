#1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#Ans: getElementById - It finds one element by id and return one element,
getElementsByClassName -  It finds elements by class name and return many elements, 
querySelector - It use CSS selector and return the first matching element
querySelectorAll - It use CSS selector and returns all matching elements.

#2. How do you create and insert a new element into the DOM?

#Ans: I create a new element document.createElement()
Then I add content inside it
then insert it into the DOM using appendChild()

#3.  What is Event Bubbling? And how does it work?

#Ans: Event Bubbling hocche jokhon ekta event first child element e hoy, tarpor step by step parent, grandparent e dhuke jai.

#4. What is Event Delegation in JavaScript? Why is it useful?

#Ans: Event Delegation hocche jokon amra parent element e event set kori, tar children element e automatically kaj kore.

#5. What is the difference between preventDefault() and stopPropagation() methods?

#Ans: preventDefault() stop browser default action.
stopPropagation() stop event go to parent element.
