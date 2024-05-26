## How to run

`npm i` / `npm install`

`npm run dev`

# My thoughts

### Description

This is quadratic function calculator make in react. I really proud of idea of ultils function. But I am wondering if this is a good way to rendering next components in the place where is primary component (using condition in the way that I using).

![quadratic-function-calculator](/quadratic-function-calculator/public/quadratic-function-calculator.png)

# ToDos:

| | - handle errors - inputs can't be empty 

| | - optimize the app because I have the same code in 3 components 

| | - add some animations between routing (optional) 


### I learnt:

- simple use of using react routing

### Problem:

- with transitions between routing: first component (this component in which you can choose form function) goes up and exits to the left because the second component is already in the DOM tree but not on the screen due to the initial animation (which moves it from right to left and stops it in the middle).
- in calculations because I forgot that values from inputs are strings and I simply needed to convert them to numbers [resolved ✔]
