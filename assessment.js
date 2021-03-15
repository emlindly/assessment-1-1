/** 
 * Assessment 1.1 
 * 
 * Please read each question carefully and answer with the according type specified. This assessment is WITHOUT
 * notes or Google. You will be screensharing while attempting this assessment, so please make sure to be sharing your
 * entire desktop when attempting it. 
 * 
 * Best of luck, and ask any of the professors for help if needed!
 * 
 * Time allotment: 1 hour
 * 
**/

/*****************************************/

/** 
 * QUESTION #1 -
 * What is the difference between a method and a function?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A method is a pre-determined function within an already written system. A function can be named, written and executed however you want in your own code."

/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; i = timesToLoop; i++) {
    console.log('I am looping!');
}

"There are no defined parameters nor arguments to pass through the parameters. The condition 'i = timesToLoop' is incorrect. It should be written as i <= 15; in order to run it 15 times. Additionally, the console.log should not contain an irrelevant string, it should contain nothing or an "i"."
/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"if and else statements."

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function? 
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Functions allow us to execute blocks of codes under specific conditions. They allow us to sequentially break down large projects or huge amounts of code, into manageable pieces. The more simplified a function is in that, it has one specific purpose, the more functional of a developer you are. When you inevitably need to go back and modify your code, if your code is broken down semantically and into sequential steps, you know exactly which function/s you need to amend. It is also essential to have readable and digestible code when you are working within a team of developers on the same project."

/**
 * QUESTION #5 -
 * Which of the following answers allows JavaScript to programmatically generate a new HTML element?
 * 
 * A) dom.createElement('div');
 * B) document.element('div');
 * C) document.createElement('div');
 * D) document.cloneElement('div');
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"C)"

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"DOM stands for Document Object Model and it is an object model representation of HTML elements. It is a way to access, create and manipulate HTML elements within JS."

/**
 * QUESTION #7 -
 * What is the output of the function?
 * 
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
    let statement = "Assessments are fun, right?!";

    if (statement === true) {
        console.log('Yes!');
    } else {
        console.log('No!');
    }
}

"You never called the function. Below the yellow bracket you'd need to write testQuestionSeven();. Depending on what you place in the argument, will dictate your output. If your statement evaluates to true, the output will be "Yes". Otherwise, your output will be "No"."

/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 * 
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

"They are all numbers, which is a primitive data type in JS."

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"An IIFE wraps your code so that it executes your functions immediately. This is best practice as it protects your code so that none of your code or variables can be accessed by others without your knowledge."

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = 'CODEM-9';
switch (value) {
    case "CODEM7":
        console.log('The answer is cupcakes!');
    case "CODEM8":
        console.log('The answer is pancakes!');
    case "CODEM9":
        console.log('The answer is french fries!');
    default:
        console.log('We are out of food...');
};

"The answer is french fries!"

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid. 
 * 
 * Answer Type: Function
 */

gridConfig = {
    width: 50,
    height: 50
}

function createGrid(width, height) {
// Creates a grid container element in order to house the grid //
    let gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
// Creates a row element, generates it in a loop until height param is met, and appends it to the created grid container above //
    for (i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
    }
    gridContainer.appendChild(row);
// Creates a square element, generates it in a loop until width param is met, and appends it to the created row above //
    for (j = 0; j < width; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
    }
    row.appendChild(square);
}
createGrid(gridConfig.width, gridConfig.height);

/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A global variable is a variable that can be accessed anywhere within your JS. A local variable is a variable you've created and can only be accessed within the same function it was created."

/**
 * QUESTION #13 - (EXTRA CREDIT!)
 * What is the default method of a fetch request?
 * 
 * A) GET
 * B) POST
 * C) PATCH
 * D) DELETE
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"C)"